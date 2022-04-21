const Discord = module.require("discord.js");
const fs = require("fs");

module.exports.run = async (client,message,args) => {
    if(!args.length) {
        message.channel.send("Укажите ваш выбор");
        return; 
    }

    const responses = [
        "Камень",
        "Ножницы",
        "Бумага"
    ];

    let botChoiceNum = Math.floor(Math.random()*(responses.length));

    let botChoice = responses[botChoiceNum];

    let memberChoiceNum = 0

    let memberChoice = args

    botChoiceNum += 1

    let memberChoiceChanged = memberChoice.toString().toLowerCase()

    if (memberChoiceChanged == 'камень') memberChoiceNum = 1;
    else if (memberChoiceChanged == 'ножницы') memberChoiceNum = 2;
    else if (memberChoiceChanged == 'бумага') memberChoiceNum = 3;
    else {message.channel.send('Укажите ваш выбор!'); return;};

    if (memberChoiceNum == 1 && botChoiceNum == 2) {
        message.channel.send(`Твой выбор "**${memberChoice}**", мой выбор "**${botChoice}**"`);
        message.channel.send('Ты выиграл!');
    }
    else if (memberChoiceNum == 2 && botChoiceNum == 3) {
        message.channel.send(`Твой выбор "**${memberChoice}**", мой выбор "**${botChoice}**"`);
        message.channel.send('Ты выиграл!');
    }
    else if (memberChoiceNum == 3 && botChoiceNum == 1) {
        message.channel.send(`Твой выбор "**${memberChoice}**", мой выбор "**${botChoice}**"`);
        message.channel.send('Ты выиграл!');
    }
    else if (memberChoiceNum == botChoiceNum) {
        message.channel.send(`Твой выбор "**${memberChoice}**", мой выбор "**${botChoice}**"`);
        message.channel.send('Ничья!');
    }
    else {
        message.channel.send(`Твой выбор "**${memberChoice}**", мой выбор "**${botChoice}**"`);
        message.channel.send('Ты проиграл!');
    }
};

module.exports.help = {
    name: "rps",
    // aliases: [""]
};