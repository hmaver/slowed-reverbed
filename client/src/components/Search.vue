<template>
  <v-container grid-list-md text-xs-center>

  <v-layout column>
    <v-flex xs2>
      <div class="white elevation-2">
        <v-toolbar flat dark class="red">
        <v-toolbar-title>Search and Play</v-toolbar-title>
        </v-toolbar>
         
    <div class ="pl-4 pr-4 pt-2 pb-2">
        <v-flex xs12 >
          <v-text-field
            label="Youtube Link"
             v-model="link"
          ></v-text-field>
        </v-flex>
  <br>
   <br>
     <div class="error" v-html="error" />
      <button @click="search" class="button"> Slow it down!
      </button>
    </div>
      </div>
    </v-flex>
  </v-layout>
  </v-container>
</template>

<script>
import SearchService from '@/services/SearchService'
export default {
  data () {
    return { 
      link:'',
      error: null
    }
  },
  methods: {
    async search () {
      try{
          await SearchService.search({
            link: this.link
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
.button {
  color:seagreen;
  font-size: large;
}
</style>
