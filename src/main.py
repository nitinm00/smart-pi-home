import serial

PORT = "/dev/ttyUSB0"

ser = serial.Serial(PORT);

while True:
    data_size = 7 # bytes
    temp_str = ser.read(data_size).decode("utf-8")[:-2]
    temp_fl = float(temp_str)
    # data.decode
    print(f'{temp_fl:.2f}')



