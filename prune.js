exports.run = (client, message, args) => {
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('Why try you dont have the perms.');
    const deleteCount = parseInt(args[0]);

    if (!deleteCount || deleteCount < 2 || deleteCount > 500) return message.reply('Please provide a number between 2 and 500 for the number of messages to delete');

    message.channel.bulkDelete(deleteCount)
        .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
};

module.exports.help = {
    name: "prune",

  };