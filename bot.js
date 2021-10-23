const fs = require('fs');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { Client, Intents, Collection, Message} = require('discord.js');
const config = require('./config.js');

const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.DIRECT_MESSAGES,
    Intents.FLAGS.GUILD_MEMBERS
    // Intents.FLAGS
  ]
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
});

//import command files
client.commands = new Collection();
const commands = [];
const files = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of files){
  const command = require(`./commands/${file}`);
  client.commands.set(command.data.name, command);
  commands.push(command.data.toJSON());

}
const rest = new REST({ version: '9' }).setToken(config.token);

rest.put(Routes.applicationGuildCommands(config.clientId, config.guildId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);

//slash command
client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const command = client.commands.get(interaction.commandName); 

	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'error executing command', ephemeral: true });
	}
});
//funny penguin new member message
client.on('guildMemberAdd', member => {
  console.log('s')
  client.channels.cache.get(config.welcomeChannel).send(`Welcome to SLUG, <@${member.id}>!\nhttps://tenor.com/view/penguins-dance-cool-moves-funny-gif-15070731`)
});

client.login(config.token)