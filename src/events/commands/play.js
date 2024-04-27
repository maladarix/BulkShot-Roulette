const { EmbedBuilder, Component, ActionRowBuilder, ButtonBuilder } = require("discord.js")
const { sendEmbed } = require("../../controller/controllerMSG")
const { displayName, readData, writeData } = require("../../controller/controller")
const { startGame } = require("../../controller/controllerGame")

module.exports = {
  name: "play",
  description: "Pour jouer",
  async run(bot, interaction) {
    let queue = readData("playerQueue")
    let game = readData("gameData")

    if(queue.find(player => player.id == interaction.user.id)) return interaction.reply({embeds: [new EmbedBuilder()
      .setTitle(`${displayName(interaction)} Tu es déja dans la file d'attente`)
      .setColor("#ff0000")],
      })

    if(game.player1.id == interaction.user.id || game.player2.id == interaction.user.id) return interaction.reply({embeds: [new EmbedBuilder()
      .setTitle(`${displayName(interaction)} Tu es déja dans une partie`)
      .setColor("#ff0000")],
      })


    if(queue.length == 1) {
      queue.push({"id": interaction.user.id, "displayName": displayName(interaction)})
      writeData("playerQueue", queue)
      startGame(bot, interaction)
    }else if(queue.length > 1) {
      queue.push({"id": interaction.user.id, "displayName": displayName(interaction)})
      writeData("playerQueue", queue)

      interaction.reply({embeds: [new EmbedBuilder()
        .setTitle(`${displayName(interaction)} Tu es dans la file d'attente...`)
        .setColor("#11ff00")],
        })

    }else{
      queue.push({"id": interaction.user.id, displayName: displayName(interaction)})
      writeData("playerQueue", queue)

      interaction.reply({embeds: [new EmbedBuilder()
        .setTitle(`${displayName(interaction)} veut jouer a BulkShot Roulette`)
        .setDescription("Fait /play pour jouer")
        .setColor("#11ff00")]
      })
    }
  }
}