
export function roll(sides, dice, rolls){
    var results = []

    for(let i = 0; i<rolls; i++){
        var numbers = 0
        for(let j = 0; j<dice; j++){
            numbers = numbers + Math.floor(Math.random() * sides) + 1;
        }
        results.push(numbers)
    }

    return JSON.stringify({"sides":sides, "dice":dice, "rolls":roll, "results":results})
}