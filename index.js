require('dotenv').config();
const Discord = require('discord.js')
const fs = require('fs') // подключаем fs к файлу
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES", "DIRECT_MESSAGES"] });
const fetch = require('node-fetch')
client.commands = new Discord.Collection() // создаём коллекцию для команд
const PREFIX = "!"

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

client.on('ready', () => {
    console.log(`Бот ${client.user.username} запустился`);
})

client.on('messageCreate', message => {
    const prefix = PREFIX
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const messageArray = message.content.split(' ') // разделение пробелами
    const command = messageArray[0] // команда после префикса
    const args = messageArray.slice(1) // аргументы после команды

    const command_file = client.commands.get(command.slice(prefix.length)) // получение команды из коллекции
    if (command_file) command_file.run(client, message, args, prefix)
})

client.login(process.env.TOKEN)
