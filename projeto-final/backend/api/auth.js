const {authSecret} = require('../.env')
const jwt = require('jwt-simple')
const bcrypt = require('bcrypt-nodejs')

module.exports = app =>{

    const signin = async (req, res) =>{
        if (!req.body.email || !req.body.password){
            res.status(400).send('Informe email e password!!')
        }

        let user;
        try {
            await app.db('users')
            .where({email : req.body.email})
            .first()
            .then(result => user = result)
            .catch(error =>  res.status(500).send(error));
        } catch (error) {
            return res.status(500).send(error)
        }
        
        
        if(!user){
            return res.status(400).send('Usuário não cadastrado')
        }

        const isMatch = bcrypt.compareSync(req.body.password, user.password)
 
        if(!isMatch) res.status(401).send('Senha/Usuário inválido');

        const now = Math.floor(Date.now() / 1000)

        const payload ={
            id: user.id,
            name: user.name,
            email: user.email,
            admin: user.admin,
            iat: now,
            exp: now + 10 // 10 segundos
            // exp: now + (60 * 60 * 24 * 3) //3 dias
        }

        const token = jwt.encode(payload, authSecret)

        res.send({
            ...payload,
            token : token
        })
    }

    const validateToken = async (req, res) =>{
        const userData = req.body || null;

        if ( userData){
            try {
                const token = jwt.decode(userData.token, authSecret);
                const expiration = new Date(token.exp * 1000)
                var now = new Date( Date.now());
                if( expiration > now){
                    return res.send(true)
                }
            } catch (error) {
            }
        }

        res.send(false)
    }

    return {signin, validateToken}
}