<template>
  <v-container grid-list-md text-xs-center>

  <v-layout column>
    <v-flex xs2>
      <div class="white elevation-2">
        <v-toolbar flat dark class="orange">
        <v-toolbar-title>Search and Play</v-toolbar-title>
        <!-- <vue-audio :file="file1"> </vue-audio> -->
        </v-toolbar>
         
    <div class ="pl-4 pr-4 pt-2 pb-2">
        <v-flex xs12 >
          <v-tooltip top>
            <template v-slot:activator="{ on }">
              <v-text-field v-on="on"
                label="Music Link"
                v-model="link"
              ></v-text-field>
            </template>
            <span> Copy & paste any Youtube or SoundCloud link here </span>
          </v-tooltip>
        </v-flex>
  <br>
<v-card>
    <v-card-text>

    <v-subheader>Pitch</v-subheader>


    <v-tooltip top>
      <template v-slot:activator ="{ on }">
        <v-card v-on="on" style="padding: 16px">
        <v-slider
          v-model="pitch"
          step="10"
          thumb-label
          ticks     
          thumb-color="orange"
          min="-300"
          max="0"
        ></v-slider>
        </v-card>
      </template>
          <span>The lower the pitch, the lower the notes in the song will sound.</span>
        </v-tooltip>


      <v-subheader>Tempo</v-subheader>
      <v-tooltip top>
      <template v-slot:activator ="{ on }">
      <v-card v-on="on" style="padding: 16px">
      <v-slider
        v-model="tempo"
        thumb-label
        ticks
        step="0.05"
        min="0.5"
        max="1.25"
        thumb-color="orange"
      ></v-slider>      
        </v-card>
      </template>
          <span>The higher the tempo is, the faster the song will be</span>
        </v-tooltip>


      <v-subheader>Reverb</v-subheader>
      <v-tooltip top>
      <template v-slot:activator ="{ on }">
      <v-card v-on="on" style="padding: 16px">
      <v-slider
        v-model="reverb"
        thumb-label
        ticks
        step="0.5"
        min="0"
        max="10"
        thumb-color="orange"
      ></v-slider>   
      </v-card>
      </template>
          <span>The higher the reverb, the more echo-y it will sound.</span>
        </v-tooltip>
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
    <audio controls style="/* margin-left: auto; */color: orange;padding: 5px;margin-left: 418px;">
      <source src= '../../../server/output.mp3' type="audio/mp3">
      Your browser does not support the audio element.
    </audio>
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
import saveState from 'vue-save-state'
import SearchService from '@/services/SearchService'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Player from '@/components/Player.vue'
// import VueAudio from 'vue-audio'

// var url = '../../../server/output.mp3';



export default {
  mixins: [saveState],
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
      url:'',
      file1:'../../../server/output.mp3',
      file2:'../../../server/output.mp3'
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
      state.link = this.link,
      state.pitch = this.pitch,
      state.tempo = this.tempo,
      state.reverb = this.reverb,
      state.outputType = this.outputType
        }, 
     player: function () {   
          window.open("#player");
  },
        playAudio: function() {
        var audio = new Audio(url)+ new Date().getTime();
        this.url = audio;
        this.$forceUpdate();
  },
      getSaveStateConfig: function(){
        return {
          'cacheKey': 'Search',
        };
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
