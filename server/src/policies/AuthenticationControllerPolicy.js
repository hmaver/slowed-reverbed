//data constraints
const Joi = require('joi')

//next means itll go to the next endpoint

module.exports = {
    register(req,res,next) {

        const schema = {
            email: Joi.string().email(),
            password: Joi.string().regex(
                new RegExp('^[a-zA-Z0-9]{8,32}$')
            )
        }
        const {error,value} = Joi.validate(req.body, schema)
        if (error) {
            switch (error.details[0].context.key) {
                case 'email':
                    res.status(400).send({
                        error: "You must provide valid email address"
                    })
                    break
                case 'password':
                res.status(400).send({
                        error: `The password is bad, you need:
                        <br>
                        1. low case, up case
                        <br>
                        2. 8 chars min, 32 max.
                        `
                })
                    break
                default:
                res.status(400).send({
                    error:'invalid regostration'
                })
            }
        } else {
        next()
        }
    }
}