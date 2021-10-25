const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('archwiki')
        .setDescription('link Arch Wiki page for a topic')
        .addStringOption(topic => 
            topic.setName('topic')
                .setDescription('topic to search')
                .setRequired(true)),
    async execute(interaction){
        const topic = interaction.options.getString('topic')
        var url = `http://wiki.archlinux.org/index.php/Special:Search/${topic}`;
        await interaction.reply(`[Arch Wiki page for ${topic}](${url})`);
    },
};
