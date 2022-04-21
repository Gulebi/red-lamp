const Discord = require("discord.js");
const snekfetch = require('snekfetch');
const fetch = require('node-fetch')

module.exports.run = async (client,message,args) => {
	try {
        if (!args.length) {
            message.channel.send('Укажите сабреддит');
            return;
        }
        const subr = args[0]

        // const { body } = await snekfetch
        //     .get(`https://www.reddit.com/r/${subr}.json?sort=top&t=week`)
        //     .query({ limit: 800 });

        const url = `https://www.reddit.com/r/${subr}.json?sort=top&t=week`
        
        const response = await fetch(url);

        const body = await response.json();

        // const body = await fetch(url)
        //     .then((res) => res.json())
        //     .then((data) => {
        //         data.filter(entry => entry.created > 1000)
        //             .slice(0, 1000);
        //     })
        //     .catch(error => {console.log(error)}
        //     );

        const allowed = message.channel.nsfw ? body.data.children : body.data.children;
        if (!allowed.length) return message.channel.send('Сабреддит не найден!');
        const randomnumber = Math.floor(Math.random() * allowed.length)

        const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle(allowed[randomnumber].data.title)
        .setDescription(`Картинка от: ${allowed[randomnumber].data.author}`)
        .setImage(allowed[randomnumber].data.url)
        .addField("Другая информация:", `Апвоутов: ${allowed[randomnumber].data.ups} / Коментов: ${allowed[randomnumber].data.num_comments}`)
        .setTimestamp()
        .setFooter({ text: 'red-lamp bot', iconURL: 'https://i.imgur.com/0PCQtit.png' })
        message.channel.send({ embeds: [embed] });
    } catch (err) {
        message.reply('Произошли технические шоколадки! Попробуйте позже.')
        return console.log(err);
    }
}

module.exports.help = {
    name: "reddit-get",
    aliases: ["rg"]
};