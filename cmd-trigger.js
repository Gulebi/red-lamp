const Discord = module.require("discord.js");
const fs = require("fs");
// const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES", "DIRECT_MESSAGES"] })

const mongo = require('./mongo')
const mongoose = require('mongoose')
const commandPrefixSchema = require('./commands/schemas/set-prefix-cmd-schema')
const globalPrefix = "!"
const guildPrefixes = {} // { 'guildId' : 'prefix' }

const { player } = require('./commands/music/main-music')

module.exports.updateCache = (guildId, newPrefix) => {
    guildPrefixes[guildId] = newPrefix
}

module.exports.loadPrefixes = async (client) => {
    await mongo().then(async (mongoose) => {
        try {
            for (const guild of client.guilds.cache) {
            const guildId = guild[1].id

            const result = await commandPrefixSchema.findOne({ _id: guildId })
            guildPrefixes[guildId] = result.prefix

            guildPrefixes[guildId] = await result.prefix
            }
        console.log(guildPrefixes)
        } finally {
        mongoose.connection.close()
        }
    })
}

module.exports.cmdDetector = async (message, client) => {
    const { member, guild } = message

    const prefix = guildPrefixes[guild.id] || globalPrefix

    if (!message.content.startsWith(prefix)) return;

    const messageArray = message.content.split(' ') // разделение пробелами
    const command = messageArray[0] // команда после префикса
    const args = messageArray.slice(1) // аргументы после команды

    const command_file = client.commands.get(command.slice(prefix.length)) // получение команды из коллекции
    if (command_file) command_file.run(client, message, args, prefix, player)
}
