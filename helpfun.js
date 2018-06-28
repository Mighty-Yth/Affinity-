const Discord = require('discord.js');
exports.run = async(client, message, args) => {
    let user = message.author
    const embed = new Discord.RichEmbed()
    .setTitle('Want sum fun')
    .addField('the prefix is',' !!')
    .addField('crusty', '-shows you the picture of god-')
    .addField('krab', '-shows you a pick of smokey the crab-')
    .addField('coupon', '-one free quepon-')
    .addField('salute', '-when you just want to say good bye to those who served you well-')
    .addField('bean','-for beanraiding time-')
    .addField('isis','-makes the bot explode-')
    .addField('First<@user>','shows you the bots reaction when they first saw the user ')
    .addField('ready', '-it shows you a raiders creed-')
    .setFooter("do not include the <>")
    .setColor('#C731A')    

    
    message.channel.send(embed)

};


exports.conf = {
    enabled: true,
    guildOnly: false,
    permLevel: 'user'
};

exports.help = {
    name: 'help2'
};