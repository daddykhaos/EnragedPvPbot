module.exports = {
    name: 'servers',
    description: "Drops all the Ips and query ports for the server",
    execute(message,args){
        message.channel.send('**Island**:   199.15.252.210:7980');
        message.channel.send('**Aberration**:   199.15.252.210:8100');
        message.channel.send('**Center**:   199.15.252.210:8190');
        message.channel.send('**Extinction**:   199.15.252.210:8220');
        message.channel.send('**Ragnarok**:    199.15.252.210:8160');
        message.channel.send('**Valguero**:    199.15.252.210:8280');
        message.channel.send('**Crystal Isles**:    199.15.252.210:8310');
        message.channel.send('**Genesis**:  199.15.252.210:8340');
    }
}