#!/usr/bin/env python
import RPi.GPIO as gpio

channel = 18
gpio.setwarnings(True)
gpio.setmode(gpio.BOARD)
gpio.setup(channel, gpio.OUT)
is_on = gpio.input(channel)

if not is_on:
	gpio.output(channel, gpio.HIGH)
else:
	gpio.output(channel, gpio.LOW)
