const bcrypt = require('bcrypt-nodejs')

module.exports = app =>{

    const { existsOrError, notExistsOrError, equalsOrError} = app.api.validation

    const encryptPassword = password =>{
        const salt = bcrypt.genSaltSync(10)
        return bcrypt.hashSync(password, salt)
    }

    const save = function(req, res){
        const user = {...req.body}

        if( !req.originalUrl.startsWith('/users')) user.admin =false;
        if(!req.user || !req.user.admin) user.admin = false

        if(req.params.id) user.id = req.params.id
        if ( user)
        try{
            existsOrError(user.name, "Nome não encontrado")
            existsOrError(user.email, "Email não encontrado")
            if ( !user.id){
                existsOrError(user.password, "Senha não encontrado")
                existsOrError(user.confirmPassword, "Corfirmação não encontrado")
                equalsOrError(user.password, user.confirmPassword, 'senhas não conferem') 
            }
            var userFromDB;

            app.db('users').select('email').where({email: user.email})
                    .then(result => userFromDB = result);
                
            
            if(userFromDB && !user.id){
                notExistsOrError(userFromDB, "usuario já cadastrado" )
            }
            if(!user.id){
                notExistsOrError(userFromDB, "usuario já cadastrado")
            }
        }catch(msg){ 
            return res.status(400).send(msg)
        }
        delete user.confirmPassword;
        user.password = encryptPassword(user.password)
        if(user.id){
            app.db('users')
                .update(user)
                .whereNull('deletedAt')
                .where({id : user.id})
                .then(_ => res.status(204).send())
                .catch(error => res.status(500).send(error))
        }else{
            app.db('users')
                .insert(user)
                .then(_ => 
                    {  
                        res.status(204).send()
                    })
                .catch(error => res.status(500).send(error))
        }
    }

    const get = (req, res) =>{
        app.db('users')
            .select('id', 'name', 'email', 'admin')
            .whereNull('deletedAt')
            .then(users => res.json(users))
            .catch(error => res.status(500).send(error))
    }

    const getById = (req, res) =>{
        const id = req.params.id
        app.db('users')
            .select('id', 'name', 'email', 'admin')
            .whereNull('deletedAt')
            .where({id : id})
            .first()
            .then(user => res.json(user))
            .catch(error => res.status(500).send(error))
    }

    const getByEmail = (req, res) =>{
        app.db('users')
            .select('id', 'name', 'email', 'admin')
            .whereNull('deletedAt')
            .where({email : req.query.email})
            .first()
            .then(user => res.send(user))
            .catch(error => res.status(500).send(error))
    }

    const remove = async (req, res)=>{
        let deletou;
        let articles;
        let user;
        try {

            await app.db('users')
                .select('*')
                .whereNotNull('deletedAt')
                .where({id : req.params.id})
                .then(result => user = result)
            notExistsOrError(user, "Usuário não existe.")

            await app.db('articles')
                    .where({userId : req.params.id})
                    .then(result => articles = result)

            notExistsOrError(articles, 'Usuário tem artigo e não pode ser excluído.')

            await app.db('users')
                    .update({deletedAt: new Date()})
                    .where({id : req.params.id})
                    .then(result => deletou = result)
            
            existsOrError(deletou, 'Usuário não encontrado.')
            res.status(204).send()
        } catch (msg) {
            res.send(msg)
        }
    }
    return {save, get, getById, getByEmail, remove}
}