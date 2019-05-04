<template>
  <v-container grid-list-md text-xs-center>

  <v-layout column>
    <v-flex xs2>
      <div class="white elevation-2">
        <v-toolbar flat dark class="orange">
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
<v-card>
    <v-card-text>
          <v-subheader>Pitch</v-subheader>
      <v-slider
        v-model="pitch"
        step="10"
        thumb-label
        ticks     
           thumb-color="orange"
        min="-300"
        max="0"
      ></v-slider>

      <v-subheader>Tempo</v-subheader>
      <v-slider
        v-model="tempo"
        thumb-label
        ticks
        step="0.05"
        min="0.5"
        max="1"
        thumb-color="orange"
      ></v-slider>      

      <v-subheader>Reverb</v-subheader>
      <v-slider
        v-model="reverb"
        thumb-label
        ticks
        step="0.5"
        min="0"
        max="10"
                thumb-color="orange"
      ></v-slider>   
    </v-card-text>
  </v-card>
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
      pitch: -300,
      tempo: '',
      reverb: '',
      error: null
    }
  },
  methods: {
    async search () {
      try{
          await SearchService.search({
            link: this.link,
            pitch: this.pitch,
            tempo: this.tempo,
            reverb: this.reverb
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
