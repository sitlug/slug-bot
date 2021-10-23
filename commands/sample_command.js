const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('command_name')
        .setDescription('does something'),
    async execute(interaction){
        //Do stuff; forexaple, reply to comamnd
        await interaction.reply('replying to command commmand_name');
    },
};