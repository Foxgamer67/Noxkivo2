const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (message.content === '!info') {
		message.channel.send('Bienvenu sur le menu infos !');
	}
});

client.login(process.env.TOKEN);
