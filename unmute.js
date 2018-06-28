module.exports.run = async (client ,message,args) => {
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('you cannot manage messages');

    let toMute = message.guild.member(message.mentions.members.first()) || message.guild.members.get(args[0]);
    if (!toMute) return message.channel.reply('please provide a user or ID');

    let role = message.guild.roles.find(r => r.name === 'Shut The Fuck Up');
    if (!role || !toMute.roles.has(role.id)) return message.channel.send("This user isn't muted retard");

await toMute.removeRole(role);
message.channel.send(`I have unmuted ${toMute}`);
}

module.exports.help = {
    name:"unmute"
}