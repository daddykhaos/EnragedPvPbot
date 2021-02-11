const { MessageEmbed } = require("discord.js");
const { execute } = require("./commands");

module.exports = {
    name: "suggest",
    aliases: [],
    async execute(client, message, args) {
        let suggestion = args.slice(0).join(/ +/);
        let SuggestionChannel = message.guild.channels.cache.find(channel => channel.name === "💭suggestions💭");
        if (!SuggestionChannel) return message.channel.send("Please create a channel named suggestions before using this command!");
        const embed = new MessageEmbed()
            .setTitle("New Suggestion")
            .setDescription(suggestion)
            .setColor("RANDOM")
            .setFooter(`${message.author.tag} | ID: ${message.author.id}`)
            .setTimestamp()
        SuggestionChannel.send(embed).then(msg => {
            msg.react("👍🏼")
            msg.react("👎🏼")
            message.channel.send("Your suggestion has been sent!");
        });
    }
}