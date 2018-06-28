const Discord = require('discord.js');

module.exports.run = async (client,message,args) => {
		let user = message.mentions.users.first() || message.author || client.user.get(args[0]);
		let guildUser = message.mentions.members.first() || message.member;
 		let embed = new Discord.RichEmbed()
			.setAuthor(user.username)
			.setDescription(`This is ${user.username}'s info!`)
			.setColor("#5A1B05")
			.addField("Full Username", `${user.username}#${user.discriminator}`)
			.addField("Nickname", guildUser.nickname)
			.addField("ID", user.id, true)
			.addField("Created At", user.createdAt , true)
			.addField("Joined", guildUser.joinedAt)
			.setThumbnail(user.displayAvatarURL);

		message.channel.send(embed);
}

module.exports.help = {
    name:"info"
}