import socket


host = 'localhost' #127.0.0.1
port = 12345
addr = (host, port)
bufsize = 2048


if __name__ == '__main__':
	client_sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM) 

	host = input("Type host: ") or host
	port = input("Type port: ") or port

	sock_addr = (host, int(port)) 
	client_sock.connect(sock_addr)

	payload = 'GET TIME'
	try:
		while True:
			client_sock.send(payload.encode('utf-8'))
			data = client_sock.recv(bufsize)
			print(repr(data))
			more = input("Want more?(y/n): ")
			if more.lower() == 'y':
				payload = input("Do U W B SnowMan?: ")
			else:
				break

	except KeyboardInterrupt:
		print("Exit by client") 

	client_sock.close()