var _ = require('lodash');

var array = [
    {
        id: 1,
        name: "Ratouney",
        games: ["Lol", "OW", "PUBG"]
    },
        {
        id: 2,
        name: "Bite",
        games: ["Lol", "OW"]
    },
        {
        id: 3,
        name: "Couille",
        games: ["Lol"]
    },
        {
        id: 4,
        name: "Gland",
        games: ["OW"]
    }
]

var args = ["OW", "Lol", "Dota"];

const rt = _.map(args, (game) => {
    console.log("Checking for game : ", game);

    const players = _.filter(array, (user) => {
        console.log("\tChecking if " + user.name + " is playing " + game);
        return user.games.includes(game);
    })
    
    console.log("=> Playing", game, " : ", players);
    return {
        game: game,
        players: _.map(players, (player) => {
        return player.name;
    })
    }
})

console.log(rt);