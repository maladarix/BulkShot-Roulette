const Discord = require("discord.js")
const bot = new Discord.Client({intents: 3276799})
const {EmbedBuilder, ActionRow, SelectMenuBuilder} = require('discord.js')

const fs = require('fs')
require("dotenv").config()

bot.on("ready", () =>{
  console.log("Bot Online")
  console.log(new Date().toLocaleString())
})

bot.login(process.env.BOT_TOKEN)