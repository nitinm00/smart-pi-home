import serial
from datetime import datetime

sensor = "AHT20"
serial_port = '/dev/cu.usbmodem8771336E55651'
baud_rate = 2400
path = "%s_LOG_%s.txt" % (str(datetime.now()), sensor)
ser = serial.Serial(serial_port, baud_rate)
with open(path, 'w+') as f:
    while True:
        line = ser.readline()
        f.writelines([line.strip(), " t = %ss \n " % (datetime.now())])