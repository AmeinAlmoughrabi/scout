/**
 * Player Object
 * @param {String} socketId the socket id of the user
 */
class Player {
  constructor(socketId, name) {
    this.socketId = socketId;
    this.name = name;
    this.location = { latitude: "0", longitude: "0" };
    this.isSeeker = false;
    this.isHost = false;
  }
}

module.exports = { Player };
