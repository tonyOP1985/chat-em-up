var socket = io();

socket.on('connect', function() {
  console.log('Connected to server');

  socket.emit('createMessage', {
    to: "Gray@fairytail.com",
    text: "I can't eat thoses!"
  });
});

socket.on('disconnect', function() {
  console.log('Disconnect from server');
});

socket.on('newMessage', function(message) {
  console.log('New message', message);
});
