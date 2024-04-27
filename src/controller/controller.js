const fs = require('fs');
const path = require('path');

function readData(file) {
  return JSON.parse(fs.readFileSync(`${__dirname, "./"}/data/${file}.json`, "utf8"))
}

function writeData(file, data) {
  fs.writeFileSync(`${path.join(__dirname, "../../")}/data/${file}.json`, JSON.stringify(data), "utf8", function(err) {
  if(err) throw err;})
}

function displayName(interaction) {
  return interaction.member.nickname ? interaction.member.nickname : interaction.user.globalName
}

module.exports = { readData, writeData, displayName}