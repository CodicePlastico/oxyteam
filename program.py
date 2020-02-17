import serial
import time
import requests
import json

headers = {'Content-type': 'application/json', 'Accept': 'text/plain'}
ser = serial.Serial('/dev/serial0',9600)
writeCommand = bytearray(b'\xFF\x01\x86\x00\x00\x00\x00\x00\x79')
while True:
	ser.write(writeCommand)
	data = ser.read(9)
	high = ord(data[2])
	low = ord(data[3])
	ppm = 256 * high + low
	print(ppm)
	payload = {'ppm':ppm}
	r = requests.post('http://192.168.23.108:8000', data=json.dumps(payload), headers=headers)
	print(r.status_code)
	time.sleep(1)
ser.close()
