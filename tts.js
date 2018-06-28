const tts = require('google-tts-api');

module.exports.run = async(client, message, args) => {
    if (!message.guild.me.hasPermission('CONNECT') || !message.guild.me.hasPermission('SPEAK')) return message.say(':stoprightthere: I do not  have the Connect or Speak permission.');
    if (!message.member.voiceChannel) return
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) return message.reply(':stoprightthere:be in a Voice chat you cuck');
    if (!this.client.voiceConnections.get(message.channel.guild.id)) {
      voiceChannel.join()
        .then(connnection => {
          tts(args.text, 'en', 1)
            .then((url) => {
              const dispatcher = connnection.play(url);
              message.react('🔊');
              dispatcher.on('end', () => voiceChannel.leave());
            })
            .catch((err) => {
              console.error(err);
              message.say(":stoprightthere: Something wen't wrong.\n" + err);
            });
        });
    } else {
      message.say(":stoprightthere:  I'm already saying something fuck off.");
    }
  };

module.exports.help = {
    name:"tts"
};