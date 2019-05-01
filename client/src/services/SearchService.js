import Api from '@/services/Api'

export default{
    search(link){
        return Api().post('search',link)
    }

    // // mySpecialFunc: mySpecialFunc(),
    // register(credentials){
    //     return Api().post('register', credentials)
    // },
    // login(credentials){
    //     return Api().post('login', credentials)
    // }
}