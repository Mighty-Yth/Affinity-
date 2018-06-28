    module.exports.run = async (client, message, args) => {
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('you cannot manage messages');

    let toMute = message.guild.member(message.mentions.members.first()) || message.guild.members.get(args[0]);
    if (!toMute) return message.reply('please provide a user or ID');

    if (toMute.id === message.author.id) return message.reply(`lol you can't mute yourself you fucking nerd`);
    if (toMute.highestRole.position >= message.member.highestRole.position) return message.reply('you cannot mute somebody who is higher or the same position as your sorry ass.');

    let role = message.guild.roles.find(r => r.name === 'Shut The Fuck Up');
    if (!role) {
        try {
            role = await message.guild.createRole({
                name: 'Shut The Fuck Up',
                color: '#3964C3',
                permissions: []
            });

            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(role, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        } catch (e) {
            console.log(e.stack);
        }
    }

    if (toMute.roles.has(role.id)) return message.channel.send('this user is already muted you jew');
    await toMute.addRole(role) 
         message.channel.send(`${toMute} Silence Thot`)

};

module.exports.help = {
    name:"mute"
}