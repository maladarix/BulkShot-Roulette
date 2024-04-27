const { EmbedBuilder } = require("discord.js")
const { readData, writeData, displayName } = require("./controller")
const Game = require("../game")

function startGame(bot, interaction) {
  let queue = readData("playerQueue")
  
  interaction.reply({embeds: [new EmbedBuilder()
    .setTitle(`${displayName(interaction)} La partie commence entre ${queue[0].displayName} et ${queue[1].displayName} !`)
    .setColor("#11ff00")],
  })

  writeData("gameData", new Game(queue[0].id, queue[1].id, queue[0].displayName, queue[1].displayName))

  queue.splice(0,2)
  writeData("playerQueue", queue)
}

function isGameActive() {
  
}

module.exports = { startGame }