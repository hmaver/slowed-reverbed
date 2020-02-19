<template>
    <v-toolbar fixed class="orange">
    <v-toolbar-title class="mr-4" style="color: white;">
        Slowed and Reverbed
    </v-toolbar-title>
<!-- 
    <v-toolbar-items>
        <v-btn flat dark>
            Browse
        </v-btn>
    </v-toolbar-items> -->
              <!-- <audio controls style="/* margin-left: auto; */color: orange;padding: 5px;margin-left: 418px;">
    <source src="../../../server/output.mp3" type="audio/mp3">
    Your browser does not support the audio element.
    </audio> -->
    <v-spacer>    </v-spacer>
        <v-toolbar-items>
            <v-btn flat dark router to ="search">
                Slow Down Time
            </v-btn>

            <v-btn flat dark router to ="player">
                Player
            </v-btn>
            <!-- <v-btn flat dark router to ="login">
                Log In
            </v-btn>

            <v-btn flat dark router to ="/">
                Sign Up
            </v-btn> -->


        </v-toolbar-items>
        

    </v-toolbar>
</template>

<script>
export default {
      playAudio: function() {
        var audio = new Audio('../../../server/output.mp3');
        audio.load();
        audio.play();
  }
}
    
</script>

<style scoped>

</style>
