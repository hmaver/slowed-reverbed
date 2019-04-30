// var sys = require('sys')
const readlLine = require('readline')
var exec = require('child_process').exec;
var pathtoSH = "/Users/averion/Downloads/SOX-DEMO/player.sh";

// exec('command', function (error, stdout, stderr) {});
// exec(pathtoSH 'testing, https://www.youtube.com/watch?v=6W1ajuerl6o, 80, 0.8, 0.9');
var test =" testing https://www.youtube.com/watch?v=6W1ajuerl6o 80 0.8 0.9";


// FILE_NAME=$1
// YOUTUBE_LINK=$2
// REVERB_LEVEL=$3
// TEMPO=$4
// PITCH=$5


var filename = 'bl';
var link = "https://www.youtube.com/watch?v=dVuxHnczNFc"
var reverb = 2;
var tempo = 0.85;
var pitch = -200;

function mySpecialFunc() {
  exec('~/Downloads/sox-demo/player.sh' + " " + filename + " " + link + " " + reverb + " " + tempo + " " + pitch, 
  function (error, stdout, stderr) {
      console.log('stdout: ' + stdout);
      console.log('stderr: ' + stderr);
      if (error !== null) {
        console.log('exec error: ' + error);
      }
  });
}

module.exports.mySpecialFunc = mySpecialFunc;