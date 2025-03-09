#!/usr/bin/env python

from flask import Flask, render_template, url_for, request
from flask_socketio import SocketIO
from threading import Lock
from datetime import datetime
import os
import json
import RPi.GPIO as gpio
import serial

# root = os.getcwd()
# views = os.path.join(root, 'views')
# public = os.path.join(root, 'public')

# index = os.path.join(views, 'index.html')

# print(index)
# app = Flask(__name__, template_folder="../views", static_folder="../public")

lights_pin = 16
fan_pin = 18

pins = {
    "lights" : {'pin_number': 16, 'state' : gpio.HIGH},
    "fan" : {'pin_number' : 18, 'state' : gpio.HIGH}
}

PORT = "/dev/ttyUSB0"
ser = serial.Serial(PORT)

ser_data_len = 7 # bytes

gpio.setwarnings(True)
gpio.setmode(gpio.BOARD)

for pin in pins:    
    gpio.setup(pins[pin]['pin_number'], gpio.OUT)

thread = None
thread_lock = Lock()

app = Flask(__name__, template_folder="../views", static_folder="../public")
app.config['SECRET_KEY'] = 'nitin!'
socketio = SocketIO(app)

def toggle_pin(button):
    gpio.output(pins[button]['pin_number'], not gpio.input(pins[button]['pin_number']))

def update_pin_state():
    for pin in pins:
        pins[pin]['state'] = gpio.input(pins[pin]['pin_number'])

def get_current_datetime():
    now = datetime.now()
    return now.strftime("%m/%d/%Y %H:%M:%S")

def background_thread():
    print("reading serial data")
    while True:
        temp_str = ser.read(ser_data_len).decode("utf-8")[:-2]
        temp_fl = float(temp_str)
        socketio.emit('updateSensorData', {'value': temp_fl, "date": get_current_datetime()})
        socketio.sleep(1)
        # print(f'{temp_fl:.2f}')
    
@socketio.on('connect')
def connect():
    global thread
    print('Client connected')
    
    with thread_lock:
        if thread is None:
            thread = socketio.start_background_task(background_thread)
            
@app.route('/')
def index():
    
    update_pin_state()
    
    return render_template('index.html')

@app.route('/<button>')
def toggleHandler(button):
    
    toggle_pin(button)
    update_pin_state()
    
    return json.dumps(pins)

if __name__ == '__main__':
    socketio.run(app, host='0.0.0.0', port=3000, debug=True)