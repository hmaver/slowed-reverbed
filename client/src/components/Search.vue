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
  <v-container fluid>
    <v-row align="center">
      <v-col class="d-flex" cols="12" sm="6">
        <v-select
          v-model="outputType"
          :items="items"
          label="Select output type you want to download"
        ></v-select>
      </v-col>
    </v-row>
  </v-container>
      
   <br>
     <div class="error" v-html="error" />
      <button @click="search(); playAudio();" class="button"> Create Audio File
      </button>
    <v-container>
    <!-- <audio controls style="/* margin-left: auto; */color: orange;padding: 5px;margin-left: 418px;">
      <source src= '../../../server/output.mp3' type="audio/mp3">
      Your browser does not support the audio element.
    </audio> -->
    </v-container>
      <br>
      <button @click="player()" class="button"> Preview in New Tab
      </button>
      
        <!-- <button @click="pause" class="button"> Stop Preview
      </button> -->

    </div>
      </div>

    </v-flex>
  </v-layout>
  </v-container>
  
</template>

<script>
import SearchService from '@/services/SearchService'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Player from '@/components/Player.vue'

// var url = '../../../server/output.mp3';

export default {
  data () {
    
    if (outputType.items == 'mp3') {
      this.outputType = mp3;
    } else {
      this.outputType = wav;
    }
    return { 
      link:'',
      pitch: '',
      tempo: '',
      reverb: '',
      outputType: '',
      error: null,
      url:''
    }
  },
  data: () => ({
    items: ['mp3', 'wav'],
  }),
  methods: {
    async search () {
      try{
          await SearchService.search({
            link: this.link,
            pitch: this.pitch,
            tempo: this.tempo,
            reverb: this.reverb,
            output: this.outputType
          })
      } catch (error) {
        this.error = error.response.data.error
      }
        }, 
     player: function () {   
          window.open("#player");
  },
        playAudio: function() {
        var audio = new Audio(url)+ new Date().getTime();
        this.url = audio;
        this.$forceUpdate();
  }

},
props: {
  outputType: String
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
