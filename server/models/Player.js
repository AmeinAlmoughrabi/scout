/**
 * Player Object
 * @param {String} socketId the socket id of the user
 */
class Player {
  constructor(socketId) {
    this.socketId = socketId;
    this.name = "Player";
    this.location = { latitude: "0", longitude: "0" };
    this.isSeeker = false;
    this.isHost = false;
  }
}

module.exports = { Player };
