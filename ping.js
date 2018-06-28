exports.run = async(client, message, args) => { 
  const msg = await message.channel.send("Ooga booga.");
msg.edit(`Ooga booga! Latency is ${msg.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
};

exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['stop'],
permLevel: 'user'
};

exports.help = {
name: "ping",

};
