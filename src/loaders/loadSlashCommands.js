const Discord = require("discord.js")
const { REST } = require("@discordjs/rest")
const { Routes } = require("discord.js")

module.exports = async bot => {

  let listecommande = []

  bot.commands.forEach(commande => {
    
    let command = new Discord.SlashCommandBuilder()

    .setName(commande.name)
    .setDescription(commande.description)

    if(commande.options != undefined) {
      for (let i = 0; i < commande.options.length; i++) {
        
        let newCommand = new Discord[`SlashCommand${commande.options[i].type}Option`]
        newCommand.name = commande.options[i].name
        newCommand.description = commande.options[i].description
        newCommand.required = commande.options[i].required
        newCommand.autocomplete = commande.options[i].autocomplete
        newCommand.choices = commande.options[i].choices

        command[`add${commande.options[i].type}Option`](newCommand)
      }
    }

    listecommande.push(command)
  });
  
  //slashCommand = slashCommand[`add${command.options[i].type}Option`].options(options)

  const rest = new REST({version: "10"}).setToken(process.env.BOT_TOKEN)
  await rest.put(Routes.applicationCommands(bot.user.id), {body: listecommande})
}