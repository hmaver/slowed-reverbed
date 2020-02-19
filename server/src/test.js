// var sys = require('sys')
const readlLine = require('readline')
var exec = require('child_process').exec;
var pathtoSH = "/Users/averion/Downloads/SOX-DEMO/player.sh";
// var givenLink = 

// exec('command', function (error, stdout, stderr) {});
// exec(pathtoSH 'testing, https://www.youtube.com/watch?v=6W1ajuerl6o, 80, 0.8, 0.9');
// var test =" testing https://www.youtube.com/watch?v=6W1ajuerl6o 80 0.8 0.9";


// FILE_NAME=$1
// YOUTUBE_LINK=$2
// REVERB_LEVEL=$3
// TEMPO=$4
// PITCH=$5


var filename = 'bl';
var givenLink = "https://www.youtube.com/watch?v=j4FL7CMustE"
// var myLink = link;
var reverb = 2;
var tempo = 0.83;
var pitch = -200;

function mySpecialFunc(givenLink, givenPitch, givenTempo, givenReverb, givenOutput) {
  var pitch = givenPitch;
  var link = givenLink;
  var tempo = givenTempo;
  var reverb = givenReverb;
  var output = givenOutput;
  exec('~/Downloads/sox-demo/player.sh' + " " + filename + " " + link + " " + reverb + " " + tempo + " " + pitch + " " + output + " echos 0.8 0.7 40.0 0.25 63.0 0.3 phaser 0.9 0.85 4.0 0.23 1.3 -s" , 
  function (error, stdout, stderr) {
      console.log('stdout: ' + stdout);
      console.log('stderr: ' + stderr);
      if (error !== null) {
        console.log('exec error: ' + error);
      }
  });
}

module.exports.mySpecialFunc= mySpecialFunc;