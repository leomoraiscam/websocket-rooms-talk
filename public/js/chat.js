const socket = io("http://localhost:3333");

socket.on("welcome", data => {
  console.log('data', data)
})