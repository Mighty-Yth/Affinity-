const Discord = require('discord.js');
module.exports.run = async (client, message, args) => {
	let user = message.mentions.members.first() || message.guild.members.get(args[0]);
	let reason = args.slice(1).join(' ');
    if (!message.member.hasPermission('KICK_MEMBERS')) return message.reply('you cannot kick others cuz you dont have the perms');
    if (!user) return message.channel.send("You did not mention anyone you retard!");
	if (!reason) return message.channel.send("god damn provide a reason to kick dumbass!");
	if(user === message.member) return message.reply("you can not kick yourself. ");
   
	const embed = new Discord.RichEmbed()
	.setTitle(`Begone Thot`)
	.addField('User:',user )
	.addField('Reason:', reason)
	.setThumbnail(message.author.avatarURL)
	.setFooter(`you have been kicked by ${message.guild.member(message.author).displayName}`)
	.setColor("#5A1B05");


	await user.kick(reason);
	message.channel.send(embed);
};


exports.conf = {
	enabled: true,
	guildOnly: false,
	permLevel: 'MODERATOR'
};

exports.help = {
    name: 'kick'
};