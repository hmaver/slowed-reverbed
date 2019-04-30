import Api from '@/services/Api'
// import test from '@slowed-reverbed/server/src/bash-func'
// var run = require('./bash-func.js')

export default{
    // mySpecialFunc: mySpecialFunc(),
    register(credentials){
        return Api().post('register', credentials)
    },
    login(credentials){
        return Api().post('login', credentials)
    }
}


// module.exports = {
//     mySpecialFunc: mySpecialFunc
// };

// AuthenticationService.register({
//     email:'testing@gmail.com',
//     password: '1234'
// })