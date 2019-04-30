const {User} = require('../models')
var funcy = require('../test')

module.exports = {
    async register (req,res) {
    try {
        // funcy.mySpecialFunc()
        const user = await User.create(req.body)
        
        res.send(user.toJSON())
    } catch (err) {
        res.status(400).send({
            error: 'This email is taken'
        })
        //email already exists
    }
}, 
    async login (req,res) {
    try {
        const {email, password} = req.body
        funcy.mySpecialFunc()

        const user = await User.findOne({    
            where: {
                email: email
            }
        })
        if (!user) {
            return res.status(403).send({
                error: 'The login information was incorrect'
            })
        }

        const isPasswordValid = password === user.password
        if (!isPasswordValid) {
            return res.status(403).send({
                error: 'The login info is incorrect'
            })
        }
        const userJson = user.toJSON()
        res.send({
            user:userJson
        })

    } catch (err) {
        res.status(500).send({
            error: 'Error has occured!'
        })
        //email already exists
    }
}



}
