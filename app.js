const Discord = require("discord.js");
const auth = require('./auth.json');

const Frank = new Discord.Client();
const prefix = "!";

const idToMention = (id) => {
    return "<@" + id + ">";
}

Frank.login(auth.token);

Frank.on('ready', function(message) {
    console.log("Connected to Server");

})

Frank.on('message', function(message) {
    if (message.author.username == "Frank" && message.author.discriminator == "2457") {
        return ;
    }

    const users = message.channel.guild.members.map((member) => {
        return member.user.id;
    });

    const randomId = users[users.length * Math.random() | 0];

    //message.channel.send("Hello " + idToMention(randomId));

    if (!message.content.startsWith(prefix)) {
        return;
    }

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();


    if (command == 'pussy') {
        const id = "<@" + message.author.id + ">";
        message.channel.send("Ey Boss ? " + id);
        return ;
    }

})
