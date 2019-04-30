// new Vue({
//     el: '#app',
//     methods:{
//         play: function(message) {
//             return message;
//         }
//     }
//   })

var foo = new Vue ({
    el: "#hera",
    data: {
        name: 'true'
    },
methods: {
    greet: function(event) {
        alert("yeah!")
        if (this.name == true){
            return this.name
        }
    }
}
})