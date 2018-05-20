#!/bin/sh
sudo pkill tmux
tmux new-session -d -s fluidsynth 
tmux set-option -t fluidsynth set-remain-on-exit on
tmux new-window -d -n "fs" -t fluidsynth:1 "sudo fluidsynth -si -a alsa -c8 -r44100 -z32 -f /home/pi//Desktop/FluidSynthController/sampleconfig.txt --gain 5 /usr/share/sounds/sf2/FluidR3_GM.sf2"
sleep 2
aconnect 20:0 128:0

