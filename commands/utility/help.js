const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (client, message, args, prefix) => {
    const embed = new Discord.MessageEmbed()
        .setColor("#4188D2")
        .setTitle("Список команд:")
        .addFields(
            { name: "!8ball (вопрос)", value: "Генерирует фразу шара предсказаний", inline: true },
            { name: "!avatar [@ник учасника]", value: "Отправляет аватар учасника", inline: true },
            { name: "!clear [кол-во]", value: "Удаляет введённое кол-во сообщений", inline: true },
            { name: "!emojify [текст]", value: "Преобразовывает введённый текст в эмодзи", inline: true },
            { name: "!ping", value: "Отправляет пинг между вами и ботом", inline: true },
            { name: "!poll [вариант1] [вариант2]", value: "Создаёт опрос", inline: true },
            { name: "!random [число от] [число до]", value: "Генерирует случайное число в заданном диапазоне", inline: true },
            { name: "!roll", value: "Подбрасывает игральную кость", inline: true },
            { name: "!rps [выбор]", value: 'Игра "Камень, Ножницы, Бумага" с ботом', inline: true },
            { name: "!say [текст]", value: "Отправляет заданный текст", inline: true },
            { name: "!setprefix [новый префикс]", value: "Обновляет префикс для бота на этом севере", inline: true },
            { name: "!temp [место]", value: "Показывает погоду в введённом месте", inline: true }
        )
        .setTimestamp()
        .setFooter({ text: "red-lamp bot", iconURL: "https://i.imgur.com/0PCQtit.png" });
    message.channel.send({ embeds: [embed] });
};

module.exports.help = {
    name: "help",
    aliases: ["h"],
};
