require('dotenv').config();
const Discord = require('discord.js')
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES", "DIRECT_MESSAGES"] })
const fs = require('fs')
const mongoose = require('mongoose')
const mongo = require('./mongo')
const cmdTrigger = require('./cmd-trigger')
const fetch = require('node-fetch')
client.commands = new Discord.Collection() // создаём коллекцию для команд

fs.readdir('./commands', (err, files) => { // чтение файлов в папке commands
    if (err) console.log(err)

    const jsfile = files.filter(f => f.split('.').pop() === 'js') // файлы не имеющие расширение .js игнорируются
    if (jsfile.length <= 0) return console.log('Команды не найдены!') // если нет ни одного файла с расширением .js

    console.log(`Загружено ${jsfile.length} команд`)
    jsfile.forEach((f, i) => { // добавляем каждый файл в коллекцию команд
        const props = require(`./commands/${f}`)
        client.commands.set(props.help.name, props)
    })
})

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
