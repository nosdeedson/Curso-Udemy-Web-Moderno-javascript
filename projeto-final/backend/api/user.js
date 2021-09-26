const bcrypt = require('bcrypt-nodejs')

module.exports = app =>{

    const { existsOrError, notExistsOrError, equalsOrError} = app.api.validation

    const encryptPassword = password =>{
        const salt = bcrypt.genSaltSync(10)
        return bcrypt.hashSync(password, salt)
    }

    const save = async function(req, res){
        const user = {...req.body}
        if(req.params.is) user.id = req.params.is
        
        try{
            existsOrError(user.name, "Nome não encontrado")
            existsOrError(user.email, "Email não encontrado")
            existsOrError(user.password, "Senha não encontrado")
            existsOrError(user.confirmPassword, "Corfirmação não encontrado")
            equalsOrError(user.password, user.confirmPassword, 'senhas não conferem')
            
            const userFromDB = app.db('users')
                .where({email: user.email}).first()
            if(userFromDB){
                notExistsOrError(userFromDB, "usuario já cadastrado")
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
            .then(users => res.json(users))
            .catch(error => res.status(500).send(error))
    }

    return {save, get}
}