require('dotenv').config();
const Discord = require('discord.js')
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES", "DIRECT_MESSAGES", "GUILD_VOICE_STATES", "GUILD_EMOJIS_AND_STICKERS", "GUILD_MESSAGE_REACTIONS"] })

module.exports = { client };

const fs = require('fs')
const path = require('path')
const mongoose = require('mongoose')
const mongo = require('./mongo')
const cmdTrigger = require('./cmd-trigger')
const fetch = require('node-fetch')
const cmdsDir = './commands'

client.commands = new Discord.Collection()
client.aliases = new Discord.Collection()


let cmdsAmount = 0

const readCommands = (dir) => {
    const files = fs.readdirSync(path.join(__dirname, dir))
    for (const file of files) {
        const stat = fs.lstatSync(path.join(__dirname, dir, file))
        if (stat.isDirectory()) {
            readCommands(path.join(dir, file))
        } else if (!file.endsWith('schema.js') && !file.endsWith('main-music.js') && !file.endsWith('nsfw-base.js')) {
            const option = require(path.join(__dirname, dir, file))
            
            client.commands.set(option.help.name, option)

            if (option.help.aliases && Array.isArray(option.help.aliases)) option.help.aliases.forEach(alias => client.aliases.set(alias, option.help.name));

            cmdsAmount++
        }
    }
}

readCommands(cmdsDir)
console.log(`Загружено ${cmdsAmount} команд`)

client.on('ready', async () => {
    console.log(`Бот ${client.user.username} запустился`);
    client.user.setActivity('на тебя', { type: 'WATCHING' }) 

    cmdTrigger.loadPrefixes(client)

    

    await mongo().then(mongoose => {
        try {
            console.log('Бот подключился к mongo!');
        } finally {
            // mongoose.connection.close()
        }
    })
})

client.on("messageCreate", (message) => {
    if (message.author.bot) return;
    cmdTrigger.cmdDetector(message, client)
})



client.login(process.env.TOKEN)
