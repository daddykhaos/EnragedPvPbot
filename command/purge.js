module.exports = {
  name: 'purge',
  description: "Clear messages!",
  async execute(message, args) {
    if (!args[0]) return message.reply("Please enter the amount of messages to clear!");

    if (isNaN(args[0])) return message.reply("You gonna use a real number? or you just gonna waste my time?");

    if (args[0] > 100) return message.reply("You can't remove more than 100 messages!");

    if (args[0] < 1) return message.reply("Bruh, you have to atleast delete 1 message.");

    await message.channel.messages.fetch({ limit: args[0] }).then(messages => {
      message.channel.bulkDelete(messages)
    });

  }
}





