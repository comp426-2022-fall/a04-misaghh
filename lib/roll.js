
export function roll(sides, dice, rolls){
    var results = []

    for(let i = 0; i<rolls; i++){
        let numbers = 0
        for(let j = 0; j<dice; j++){
            numbers = numbers + Math.floor(Math.random() * sides) + 1;
        }
        results.push(numbers)
    }

    return {"sides":sides, "dice":dice, "rolls":roll, "results":results}
}