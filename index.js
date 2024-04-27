const Discord = require("discord.js")
const bot = new Discord.Client({intents: 3276799})
const loadCommands = require('./src/loaders/loadCommands')
const loadSlashCommands = require('./src/loaders/loadSlashCommands')
const {EmbedBuilder, ActionRow, SelectMenuBuilder} = require('discord.js')
const autocomplete = require('./src/commandHandler')

const fs = require('fs')
require("dotenv").config()

bot.commands = new Discord.Collection()


loadCommands(bot)


bot.on("ready", async () =>{
  console.log("Bot Online")
  console.log(new Date().toLocaleString())
  await loadSlashCommands(bot)
})

bot.on("interactionCreate", async (interaction) => {
  autocomplete.commandHandler(bot, interaction)
})

bot.login(process.env.BOT_TOKEN)