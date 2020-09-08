//var Room = require("")
const { Room } = require("../models/Room");
const { Player } = require("../models/Player");

var rooms = new Map();

function createOrJoinRoom(roomName, socketId) {
  // if the player does not exists in a room
  var newPlayer = new Player(socketId);
  if (rooms.has(roomName)) {
    //join room
    rooms.get(roomName).players.push(newPlayer);
    console.log("joined the room: " + roomName);
  } else {
    //create room
    var newRoom = new Room(roomName);
    newPlayer.isHost = true;
    newRoom.players.push(newPlayer);
    rooms.set(roomName, newRoom);
    console.log("created the room: " + roomName);
  }
  console.log(rooms);
}

function leaveRoom(socketId) {
  var roomName = getRoomBySocketId(socketId);
  if (roomName) {
    var room = rooms.get(roomName);
    room.players.pop(room.players.find((e) => e.socketId === socketId)); //removes user
    if (room.players.length === 0) {
      //if the room is empty delete it
      console.log("closed room: " + roomName);
      rooms.delete(roomName);
    }
    console.log(rooms);
  }
}

function updatePlayerLocation(socketId, location) {
  rooms.forEach((room) => {
    for (var i = 0; i < room.players.length; i++) {
      if (room.players[i].socketId === socketId) {
        room.players[i].location = location;
        console.log(room.players[i]);
      }
    }
  });
}

function getPlayersInRoom(roomName) {
  return rooms.get(roomName).players;
}

function getRoomBySocketId(socketId) {
  let usersRoom = null;
  rooms.forEach((room) => {
    for (var i = 0; i < room.players.length; i++) {
      if (room.players[i].socketId === socketId) {
        usersRoom = room.name;
      }
    }
  });
  return usersRoom;
}

function getAllUsers() {
  var users = [];
  rooms.forEach((room) => {
    for (var i = 0; i < room.players.length; i++) {
      users.push(room.players[i]);
    }
  });
  return users;
}

module.exports = {
  createOrJoinRoom,
  getPlayersInRoom,
  leaveRoom,
  updatePlayerLocation,
};
