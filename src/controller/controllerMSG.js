const { EmbedBuilder, embedLength } = require('discord.js')

function getChan(guild, chanId) {
  return guild.channels.cache.find(chan => chan.id == chanId)
}

module.exports = {getChan}