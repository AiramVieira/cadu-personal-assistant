const Discord = require('discord.js');
const search = require('yt-search');
require('dotenv').config();
const { Player } = require('discord-music-player');

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

const player = new Player(client, {
  leaveOnEmpty: false,
});
client.player = player;

client.login(settings.token);

client.on('ready', () => {
  console.log('I am ready to Play songs');
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', (message) => {
  const args = message.content.slice(settings.prefix.length).trim().split(/ +/g);
  const command = args.shift();
  let guildQueue = client.player.getQueue(message.guild.id);

  if (command === 'play') {
    const play = async (url) => {
      let queue = client.player.createQueue(message.guild.id);
      await queue.join(message.member.voice.channel);

      let song = await queue.play(url).catch((_) => {
        if (!guildQueue) {
          queue.stop();
          guildQueue.stop();
        }
      });
    };

    if (args.join(' ').startsWith('https://')) {
      play(args.join(' '));
    } else {
      search(args.join(' '), (err, res) => {
        if (err) return message.channel.send('Deu ruim, não achei as músicas');

        let videos = res.videos.slice(0, 5);

        let resp = '';
        for (let i = 0; i < videos.length; i++) {
          resp += `**[${parseInt(i) + 1}]:** \`${videos[i].title}\`\n`;
        }

        resp += `\n**Choose a number between \`1-${videos.length}\``;

        message.channel.send(resp);

        const filter = (m) => !isNaN(m.content) && m.content < videos.length + 1 && m.content > 0;
        const collector = message.channel.createMessageCollector(filter);

        collector.on('collect', async function (m) {
          const index = parseInt(m.content);
          if (!isNaN(index)) {
            play(videos[index - 1].url);
          }
        });
      });
    }
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
