var app = require("express")();
var http = require("http").createServer(app);
var io = require("socket.io")(http);

const RoomManagement = require("./src/RoomManagement");

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("join_room", (payload) => {
    socket.join(payload.roomName);
    RoomManagement.createOrJoinRoom(payload.roomName, socket.id);
  });

  socket.on("update_player_location", (payload) => {
    RoomManagement.updatePlayerLocation(socket.id, payload);
    socket.emit("");
  });

  socket.on("disconnect", () => {
    RoomManagement.leaveRoom(socket.id);
    console.log("user disconnected");
  });
});

http.listen(5000, () => {
  console.log("listening on *:5000");
});
