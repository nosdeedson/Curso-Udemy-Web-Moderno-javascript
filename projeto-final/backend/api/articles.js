const queries = require('./queries')
module.exports = app =>{

    const { existsOrError, notExistsOrError, equalsOrError} = app.api.validation
    const itensPerPage = 2;

    const get = (req, res) =>{
        const page = req.query.page || 1;
        let totalElements;
        app.db('articles')
            .count('id').first()
            .then(result => totalElements = parseInt(result.count))
        // res.send(count)
        app.db.table('articles')
            .innerJoin('users', 'articles.userId', '=', 'users.id')
            .select('articles.id', 'articles.name as name', 'articles.imageUrl',
            'articles.description', 'users.name as userName')
            .limit(itensPerPage).offset(page * itensPerPage - itensPerPage)
            .then(articles => res.send({data: articles, totalElements, itensPerPage}))
            .catch(error => res.status(500).send(error))
    }

    const getById = (req, res) =>{
        app.db('articles')
            .select('*')
            .where({id : req.params.id})
            .first()
            .then(article => res.send(article))
            .catch(error => res.status(500).send(error))
    }

    const getByCategory = async (req, res) =>{
        const categoryId = req.params.id
        const page =req.query.page || 1
        let categoriesIds;
        var categories = await app.db.raw(queries.categoryWithChildren, categoryId)
        const ids = categories.rows.map(c => c.id)
        app.db({a: 'articles', u: 'users'})
        .select('a.id', 'a.name', 'a.description', 'a.imageUrl', { author: 'u.name' })
        .limit(itensPerPage).offset(page * itensPerPage - itensPerPage)
        .whereRaw('?? = ??', ['u.id', 'a.userId'])
        .whereIn('categoryId', ids)
        .orderBy('a.id', 'ASC')
        .then(articles => res.json(articles))
        .catch(err => res.status(500).send(err))
    }

    const remove = async(req, res)=>{
        var rowsDeleted;
        try {
            app.db('articles')
                .delete()
                .where({ id: req.params.id })
                .then(result => rowsDeleted = result)

            existsOrError(rowsDeleted, "Artigo inexistente.");
            res.status(204).send()
        } catch (msg) {
            res.status(404).send(msg)
        }
       
    }

    const save = (req, res) =>{
        const article = {...req.body}
        if( req.params.id) article.id = req.params.id;
        try {
            existsOrError(article.name, "Nome é obrigatório.");
            existsOrError(article.userId, "Autor obrigatório");
            existsOrError(article.content, 'Conteúdo obrigatório');
            existsOrError(article.description, 'Descrição obrigatória');
            existsOrError(article.categoryId, 'Categoria obrigatória');
        } catch (msg) {
            res.status(400).send(msg)
        }

        if ( article.id){
            app.db('articles')
                .update(article)
                .where({id : article.id})
                .then(_ => res.status(204).send())
                .catch(error => res.status(500).send(error))
        }else{
            app.db('articles')
                .insert(article)
                .then(_ => res.status(204).send())
                .catch(error => res.status(500).send())
        }
    }

    return { save, remove, get, getById, getByCategory}
}