import minimist from 'minimist'
import express from 'express'
import { roll } from "./lib/roll.js"

const app = express();
app.use(express.urlencoded({extended : true}));

const args = minimist(process.argv.slice(2));

let port = 5000;

if (port in args){
    port = args.port;
}

app.get('/app/', (req, res) => {
    res.status(200);
    res.send('200 OK');
});


app.get('/app/roll/', (req, res) => {
    res.status(200)
    res.send(roll(6,2,1))
});

app.post('/app/roll/', (req, res) => {
    let sides = parseInt(req.body.sides)
    let dice = parseInt(req.body.dice)
    let roll = parseInt(req.body.roll)
});

app.get('/app/roll/:sides/', (req, res) => {
    res.status(200)
    let sides = parseInt(req.params.sides)
    res.send(roll(sides,2,1))
})




app.listen(port)
