const Discord = require('discord.js');
const client = new Discord.Client({
  intents: [
    Discord.Intents.FLAGS.GUILDS,
    Discord.Intents.FLAGS.GUILD_MESSAGES,
    Discord.Intents.FLAGS.GUILD_VOICE_STATES,
  ],
});
const settings = {
  prefix: '!',
  token: process.env.REACT_APP_DISCORD_KEY,
};

const { Player } = require('discord-music-player');
const player = new Player(client, {
  leaveOnEmpty: false,
});
client.player = player;

client.on('ready', () => {
  console.log('I am ready to Play songs');
});

client.login(settings.token);

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', async (message) => {
  const args = message.content.slice(settings.prefix.length).trim().split(/ +/g);
  const command = args.shift();
  let guildQueue = client.player.getQueue(message.guild.id);

  if (command === 'play') {
    let queue = client.player.createQueue(message.guild.id);
    await queue.join(message.member.voice.channel);
    let song = await queue.play(args.join(' ')).catch((_) => {
      if (!guildQueue) queue.stop();
    });
  }

  if (command === 'skip') {
    guildQueue.skip();
  }

  if (command === 'stop') {
    guildQueue.stop();
  }

  if (command === 'pause') {
    guildQueue.setPaused(true);
  }

  if (command === 'resume') {
    guildQueue.setPaused(false);
  }
});
