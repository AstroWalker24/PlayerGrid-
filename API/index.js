import teamData from './data.js';
import express from 'express';
import cors from 'cors';


const app = express();
const port = 3000;

app.use(cors());

app.get('/players', (req,res)=>{
    res.send(teamData);
})


app.listen(port, ()=>{
    console.log(`server is up and running on port ${port}`);
})

