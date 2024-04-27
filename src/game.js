class Game {

  constructor(player1Id, player2Id, player1Name, player2Name) {
    this.active = false
    this.player1 = {id: player1Id, name: player1Name, lifes: 0}
    this.player2 = {id: player2Id, name: player2Name, lifes: 0}
  }
}

module.exports = Game