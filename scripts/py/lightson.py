#!/usr/bin/env python
import RPi.GPIO as gpio

channel = 23
gpio.setmode(gpio.BCM)
gpio.setup(channel, gpio.OUT)
gpio.output(channel, gpio.LOW)
