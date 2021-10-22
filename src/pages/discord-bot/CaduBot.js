// console.log('a');

const Discord = require('discord.js');
const axios = require('axios');
const { Player } = require('discord-music-player');

const client = new Discord.Client({
  intents: [
    Discord.Intents.FLAGS.GUILDS,
    Discord.Intents.FLAGS.GUILD_MESSAGES,
    Discord.Intents.FLAGS.GUILD_VOICE_STATES,
  ],
});

(async () => {
  const url = `https://cadu-service-api.herokuapp.com`;
  const response = await axios.get(url);

  const settings = {
    prefix: '!',
    token: response.data.key,
  };

  const player = new Player(client, {
    leaveOnEmpty: false,
  });
  client.player = player;

  client.login(settings.token);

  client.on('ready', () => {
    console.log('I am ready to Play songs');
    console.log(`Logged in as ${client.user.tag}!`);

    return;
  });

  client.on('message', async (message) => {
    console.log('message');
    const args = message.content.slice(settings.prefix.length).trim().split(/ +/g);
    const command = args.shift();
    let guildQueue = client.player.getQueue(message.guild.id);

    if (command === 'play') {
      console.log('play');
      let queue = client.player.createQueue(message.guild.id);
      await queue.join(message.member.voice.channel);
      let song = await queue.play(args.join(' ')).catch((_) => {
        if (!guildQueue) queue.stop();
      });
    }

    if (command === 'skip') {
      console.log('skip');
      guildQueue.skip();
    }

    if (command === 'stop') {
      console.log('stop');
      guildQueue.stop();
    }

    if (command === 'pause') {
      console.log('pause');
      guildQueue.setPaused(true);
    }

    if (command === 'resume') {
      console.log('resume');
      guildQueue.setPaused(false);
    }
    return;
  });
})();
