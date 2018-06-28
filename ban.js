const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission('BAN_MEMBERS')) return message.reply('HALT! you can not ban people, go suck a cock');
    let member = message.mentions.members.first() || message.guild.members.get(args[0]) ;
    if (!member) return message.reply('Please mention the Idiots ID or user');
    if (!member.bannable) return message.reply('You dont have the perms to ban.');
    

    let reason = args.slice(1).join(' ');
    if (!reason) {
        return message.reply('Please indicate a reason for the ban!');
    }

    await member.ban(reason)
        .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
    const embed = new Discord.RichEmbed()
        .setTitle(`${member.user.username} has been banned from the Mickey Mouse Club House for innapropreate behaviour`)
        .setDescription(`for ${reason}`)
        .setFooter(`Banned by ${message.guild.member(message.author).displayName}`, message.author.avatarURL);
    message.channel.send(embed);
}

module.exports.help = {
    name: "ban"

}