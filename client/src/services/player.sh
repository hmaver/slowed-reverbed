#!/bin/bash

FILE_NAME=$1
YOUTUBE_LINK=$2
REVERB_LEVEL=$3
TEMPO=$4
PITCH=$5

youtube-dl --output "$FILE_NAME.%(ext)s" -x --audio-format wav $YOUTUBE_LINK
# lmfao idk where the "-w" below is supposed to go...fix it
play $FILE_NAME.wav reverb $REVERB_LEVEL tempo $TEMPO pitch $PITCH

