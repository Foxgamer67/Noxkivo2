const Discord = require('discord.js');
const client = new Discord.Client();

client.on ("guildMemberAdd", member => {

	var role = member.guild.roles.find ("name", "✔️ | 𝐕𝐢𝐞𝐰𝐯𝐞𝐫𝐬");
	member.addRole (role);

})

client.on ("guildMemberRemove", member => {

})

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (message.content === '!info') {
		message.channel.send('Bienvenu sur le menu infos !');
	}
});

client.login(process.env.TOKEN);
