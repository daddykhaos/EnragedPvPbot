const Discord = require("discord.js");

const client = new Discord.Client();

const prefix = '-';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandfiles = fs.readdirSync('./command/').filter(file => file.endsWith('.js'));
for (const file of commandfiles) {
  const command = require(`./command/${file}`);

  client.commands.set(command.name, command);
}


client.on('ready', () => {
  console.log('bot is ready');
});

client.on('message', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === 'wipe') {
    client.commands.get('wipe').execute(message, args);
  } else if (command === 'vote') {
    client.commands.get('vote').execute(message, args);
  } else if (command === 'commands') {
    client.commands.get('commands').execute(message, args);
  } else if (command === 'purge') {
    client.commands.get('purge').execute(message, args);
  } else if (command === 'servers') {
    client.commands.get('servers').execute(message, args);
  } else if (command === 'suggest') {
    client.commands.get('suggest').execute(client, message, args);
  }
  }
 
);


client.login('ODA2MDY4NTAxMDg0ODk3Mjkw.YBkDyg.EsUFGLsyOFcafjEimdAIkGdBtcI')