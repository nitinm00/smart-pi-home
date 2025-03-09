#!/usr/bin/env python
import RPi.GPIO as gpio

channel = 16
gpio.setwarnings(True)
gpio.setmode(gpio.BOARD)
gpio.setup(channel, gpio.OUT)
is_on = gpio.input(channel)

if not is_on:
	gpio.output(channel, gpio.HIGH)
	print(gpio.input(channel))
else:
	gpio.output(channel, gpio.LOW)
	print(gpio.input(channel))
