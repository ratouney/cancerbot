var _ = require('lodash');

let array = [];

let args = ['Lol', "OW", "PUGB"];
let author = "1234928402394802394";
let username = "Ratouney";
let discriminator = "1851";

const funk = (args, author, username, discriminator) => {
    if (array.length == 0 || array == undefined) {
        array = [{
            user: username + "#" + discriminator,
            games: args,
        }]
    } else {
        const idx = _.findIndex(array, function(elem) {
            const name = username + "#" + discriminator;
            return name == elem.user;
        })

        if (idx == -1) {
            array.push({
                user: username + "#" + discriminator,
                games: args,
            })
        } else {
            const newObj = Object.assign({}, array[idx], {games: args});
            array[idx] = newObj;
        }

        const output = _.map(args, (game) => {
                const players =  _.filter(array, (user) => {
                    return user.games.includes(game);
                });

                return {
                    players: _.map(players, (player) => {
                        return player.user;
                    }),
                    gamename: game
                };
        });

        output.forEach((value) => {
            console.log(value.gamename, " : ");
            value.players.forEach((cunt) => {
                console.log("\t " + cunt);
            })
        })
    }
};

funk(args, author, username, discriminator);

args = ['Lol'];
author = "2423842394823090489";
username = "Tirabard";
discriminator = "1337";

funk(args, author, username, discriminator);

args = ['OW'];
author = "1234928402394802394";
username = "Ratouney";
discriminator = "1851";

funk(args, author, username, discriminator);


//console.log("Output : ", array);
