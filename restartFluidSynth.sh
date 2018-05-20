#!/bin/sh
sudo pklill fluidsynth
sudo fluidsynth -si -a alsa -c8 -r44100 -z32 -f sampleconfig.txt --gain 5 /usr/share/sounds/sf2/FluidR3_GM.sf2 &
sleep 15
aconnect 20:0 128:0