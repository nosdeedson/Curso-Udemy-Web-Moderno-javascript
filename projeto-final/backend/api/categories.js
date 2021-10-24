module.exports = app =>{
    const { existsOrError, notExistsOrError, equalsOrError} = app.api.validation
    
    const withPath = categories =>{
        const getParent = (categories, parentId) =>{
            const parent = categories.filter(parent => parent.id === parentId)
            return parent.length ? parent[0] : null
        }

        const categoriesWithPath = categories.map(category =>{
            let path = category.name
            let parent = getParent(categories, category.parentId)

            while(parent){
                path = `${parent.name} > ${path}`
                parent = getParent(categories, parent.parentId)
            }

            return {...category, path}
        })

        categoriesWithPath.sort( (a, b) =>{
            if( a.path < b.path ) return -1
            if( a.path > b.path ) return 1
            return 0
        })

        return categoriesWithPath
    }

    const get = (req, res) =>{
        app.db("categories")
            .select('*')
            .then(categories => res.json(withPath(categories)))
            .catch(error => res.status(500).send(error))
    }

    const getById = (req, res) =>{
        app.db('categories')
            .select('*')
            .where({id : req.params.id})
            .then(category => {
                const cat = withPath(category);
                res.json(cat[0])
            })
            .catch(error => res.status(500).send(error))
    }

    const save = (req, res ) =>{
        const category = {...req.body}
        if(req.params.id) category.id = req.params.id
        try {
            existsOrError(category.name, "Nome não informado")
        } catch (error) {
            return res.status(400).send(error)
        }

        if ( category.id){
            app.db('categories')
                .update(category)
                .where({id : req.params.id})
                .then(_ => {res.status(204).send()})
                .catch(error => res.status(500).send(error))
        }else{
            app.db('categories')
                .insert(category)
                .then(_ => {res.status(204).send()})
        }
    }

   
    const remove = async (req, res) => {
        try {
            var subCategory;
            await app.db('categories')
            .select('*')
            .where({parentId : req.params.id})
            .then(result => subCategory = result)
            notExistsOrError(subCategory, "Esta categoria tem categorias filhas. Exclua-as primeiro.");

            var articles;
            await app.db('articles')
                .select('*')
                .where({categoryId : req.params.id})
                .then(result => articles = result)
                
            notExistsOrError(articles, "Esta categoria tem artigos")
            
            var rowsDeleted;
            app.db('categories').delete().where({id : req.params.id})
                .then(result => rowsDeleted = result)
            notExistsOrError(rowsDeleted, "categoria não encontrada.")
            res.status(204).send()
        } catch (error) {
            res.status(500).send(error)
        }
    }

    const toTree = (categories, tree) =>{
        if(!tree) tree = categories.filter(category => !category.parentId)

        tree = tree.map(parentNode =>{
            const isChild = node => node.parentId === parentNode.id
            parentNode.children = toTree(categories, categories.filter(isChild))
            return parentNode
        })

        return tree
    }

    const getTree = (req, res) =>{
        app.db('categories')
            .select('*')
            .then(categories => res.send(toTree(withPath(categories))))
            .catch(error => res.status(500).send(error))
    }

    return {save, remove, get, getById, getTree}
}