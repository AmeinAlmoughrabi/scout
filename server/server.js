const express = require("express");
const cors = require("cors");
var http = require("http");
var server = require("http").Server();
var io = require("socket.io")(server);
const dotenv = require("dotenv").config();
const colors = require("colors");

const connectDB = require("./config/db");
const RoomManagement = require("./src/RoomManagement");

run();

async function run() {
  await connectDB();
}

//======================================================================================================
//										Configure Express server										   |
//======================================================================================================
const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT;

http.createServer(app).listen(PORT, function () {
  console.log(`HTTPS Server running on port ${PORT}`.yellow.bold);
});

const IOPORT = process.env.IOPORT;
server.listen(
  IOPORT,
  console.log(`SOCKET IO Server running on port ${IOPORT}`.green.bold)
);

//======================================================================================================
//											Api Endpoints											   |
//======================================================================================================

app.get("/femi", function (req, res) {
  res.send("Successfully hit the scout api!");
});

//======================================================================================================
//											socket io shit										   |
//======================================================================================================

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("join_room", (payload) => {
    socket.join(payload.roomName);
    RoomManagement.createOrJoinRoom(payload.roomName, payload.name, socket.id);
    io.in(payload.roomName).emit(
      "new_player_joined_lobby",
      RoomManagement.rooms.get(payload.roomName).players
    );
  });

  socket.on("update_player_location", (payload) => {
    RoomManagement.updatePlayerLocation(socket.id, payload);
  });

  console.log("YEAH");

  socket.on("disconnect", () => {
    RoomManagement.leaveRoom(socket.id);
    console.log("user disconnected");
  });
});
