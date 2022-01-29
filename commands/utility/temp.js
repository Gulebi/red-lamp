const Discord = module.require("discord.js");
const fs = require("fs");

const weather = require('weather-js');

module.exports.run = async (client,message,args) => {
    if(!args.length) {
        message.channel.send("Укажите место");
        return; 
    }
        
    weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {
    
    let windspeed = result[0].current.windspeed.split(" ")
    windspeed.pop()

    let date = result[0].current.date.split("-")
    date.reverse()

    try {
    let embed = new Discord.MessageEmbed()
        .setTitle(`Погода - ${result[0].location.name}`)
        .setColor("#ad0000")
        .setDescription("Температура может отличатся в разное время")
        .addField("Температура", `${result[0].current.temperature} °C`, true)
        .addField("Ощущаестя как", `${result[0].current.feelslike} °C`, true)
        .addField("Влажность", `${result[0].current.humidity} %`, true)
        .addField("Скорость ветра", `${windspeed.join()} км/ч`, true)
        .addField("Дата", date.join("."), true)
        .addField("Время наблюдения", result[0].current.observationtime, true)
        .setThumbnail(result[0].current.imageUrl)
        .setTimestamp()
        .setFooter({ text: 'red-lamp bot', iconURL: 'https://i.imgur.com/0PCQtit.png' });
    message.channel.send({ embeds: [embed] })

    } catch(err) {
        console.log(err);
        return message.channel.send("Невозможно получить данные о погоде в заданном месте")
    }
})

};

module.exports.help = {
    name: "temp",
    aliases: [""]
};