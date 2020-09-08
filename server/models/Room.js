/**
 * Response Object
 * @param {String} name
 */
class Room {
  constructor(name) {
    this.name = name;
    this.gameIsInProgress = false;
    this.players = [];
  }
}

module.exports = { Room };
