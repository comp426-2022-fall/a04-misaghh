import minimist from 'minimist'
import express from 'express'
import {roll} from "./lib/roll.js"

const app = express();
app.use(express.urlencoded({extended : true}));

const args = minimist(process.argv.slice(2));

var port = 5000;

if ("port" in args){
    port = args.port;
}

app.get('/app/', (req, res) => {
   // res.status(200);
    res.send('200 OK');
});

app.get('/app/roll/', (req,res) => {
  //  res.status(200)
    res.send(roll(6,2,1))
});

app.post('/app/roll/', (req, res) => {
    let sides = parseInt(req.body.sides)
    let dice = parseInt(req.body.dice)
    let rolls = parseInt(req.body.roll)
    res.send(roll(sides,dice,rolls))
});

app.get('/app/roll/:sides/', (req, res) => {
  //  res.status(200)
    let sides = parseInt(req.params.sides)
    res.send(roll(sides,2,1))
})

app.get('/app/roll/:sides/:dice/', (req, res) => {
   // res.status(200)
    let sides = parseInt(req.params.sides)
    let dice = parseInt(req.params.dice)
    res.send(roll(sides,dice,1))
})

app.get('/app/roll/:sides/:dice/', (req, res) => {
   // res.status(200)
    let sides = parseInt(req.params.sides)
    let dice = parseInt(req.params.dice)
    let roll = parseInt(req.params.roll)
    res.send(roll(sides,dice,roll))
})

app.use(function(req, res){
    res.send("404 NOT FOUND")
})

app.listen(port)