const {User} = require('../models')
var funcy = require('../test')

module.exports = {
    async search (req,res) {
        try {
            const {link,pitch,tempo,reverb} = await req.body
            funcy.mySpecialFunc(link,pitch,tempo,reverb)
            // res.download('../server/bl.wav', 'result.wav');

        } catch (err) {
            res.status(400).send({
                error: 'nope'
            })
        }

    },

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
        // if (user && isPasswordValid) {
        //     funcy.mySpecialFunc('https://www.youtube.com/watch?v=CWpINHG3928')
        // }
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
