exports.run = async (client, message, args) => {
	
	if (!message.member.roles.find(r => r.name === 'LMAO')) return message.reply(' do not do that cunt')
	let dmMember = message.mentions.members.first() || message.guild.members.get(args[0]);
	if (!dmMember) return message.reply('Please mention a valid member to dm!');

	const dmmessage = args.slice(1).join(' ');
	if (!dmmessage) return message.reply('Please provide a message!');
 
	await dmMember.send(dmmessage);
	message.author.send(`I sent a direct message to ${dmMember}`);
	message.delete();
};

exports.conf = {
	enabled: true,
	guildOnly: false,
	permLevel: 'LMAO'
};

exports.help = {
	name: 'dm',
};