<template>
  <v-container grid-list-md text-xs-center>

  <v-layout column>
    <v-flex xs2>
      <div class="white elevation-2">
        <v-toolbar flat dark class="red">
        <v-toolbar-title>Register </v-toolbar-title>
        </v-toolbar>
         
    <div class ="pl-4 pr-4 pt-2 pb-2">
        <v-flex xs12 >
          <v-text-field
            label="Email"
             v-model="email"

          ></v-text-field>
        </v-flex>
        <v-flex xs12 >
          <v-text-field
            label="Password"
             v-model="password"

          ></v-text-field>
        </v-flex>




  <br>

   <br>
     <div class="error" v-html="error" />
      <button @click="register">Register

      </button>
    </div>
      </div>
    </v-flex>
  </v-layout>
  </v-container>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return { 
      email:'',
      password:'',
      error: null
    }
  },
  methods: {
    async register () {
      try{
          await AuthenticationService.register({
            email: this.email,
            password: this.password
          })
      } catch (error) {
        this.error = error.response.data.error
      }
        }
      

  }
}
</script>

<style scoped> 
h1, h2 {
  font-weight: normal;
}
.error {
  color: red;
}
</style>
