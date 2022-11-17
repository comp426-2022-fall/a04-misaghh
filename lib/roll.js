import minimist from "minimist";

const args = minimist(process.argv.slice(2));

function roll(sides, dice, rolls){
    var results = []

    for(let i = 0; i<rolls; i++){
        var numbers = 0
        for(let j = 0; j<dice; j++){
            numbers = numbers + Math.floor(Math.random() * sides) + 1;
        }
        results.push(numbers)
    }

    const output  = {
        sides: sides,
        dice: dice,
        rolls: rolls,
        results: results
    }
}