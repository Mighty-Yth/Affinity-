const Discord = require('discord.js');
exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setTitle('Hey kid want some help...')
    .addField('the prefix is',' !!')
    .addField('help', '-shows you this-')
    .addField(':one:','-shows you the MISC section command section -' )
    .addField(':two:','-shows you the FUN section command section-')
    .addField(':three:','-shows you the MODERATION command section-')
    .setFooter('Type !!help <number>, but do not include <> ')
    .setColor('#EC6C51')    

    message.channel.send(embed)

};


exports.conf = {
    enabled: true,
    guildOnly: false,
    permLevel: 'user'
};

exports.help = {
    name: 'help'
};