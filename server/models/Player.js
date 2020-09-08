/**
 * Response Object
 * @param {String} name if the request was succesful
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
