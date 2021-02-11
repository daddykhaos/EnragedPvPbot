module.exports = {
    name: 'commands',
    description: "shows the commands of the server",
    execute(message,args) {
    message.channel.send('The Commands for this server are as follows: (Make sure to use the prefix - )'); 
        message.channel.send('**-wipe**= ``lets you know when the next wipe day is``');
        message.channel.send('**-vote**= ``gives you voting links for ark-servers.net so you can help our server grow up the ranks!``');
        message.channel.send('**-commands**= ``Gives you a commands list``');
        message.channel.send('**-purge**= ``Yeets messages into another dimension`` **Moderator Only**');
        message.channel.send('**-servers**=  ``Shows the IP and the Query ports for the servers``');
       
}
}
