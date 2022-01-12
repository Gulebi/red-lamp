const Discord = module.require("discord.js");
const fs = require("fs");
const mongo = require('../mongo')
const setPrefixCmdSchema = require('./schemas/set-prefix-cmd-schema')

module.exports.run = async (client,message,args) => {
    await mongo().then(async mongoose => {
        try {
            const guildId = message.guild.id
            const prefix = args.toString()  

            await setPrefixCmdSchema.findByIdAndUpdate(
                {
                    _id: guildId,
                },
                {
                    _id: guildId,
                    prefix: prefix,
                },
                {
                    upsert: true,
                }
            )

            message.reply(`Префикс был изменён на ${prefix}`)
        } finally {
            mongoose.connection.close()
        }
    })
};

module.exports.help = {
    name: "setprefix"
};