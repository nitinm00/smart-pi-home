#!/usr/bin/env python
import RPi.GPIO as gpio

channel = 24
gpio.setwarnings(False)
gpio.setmode(gpio.BCM)
gpio.setup(channel, gpio.OUT)
is_on = gpio.input(channel)

if not is_on:
	gpio.output(channel, gpio.HIGH)
else:
	gpio.output(channel, gpio.LOW)
