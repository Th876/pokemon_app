// require express
const express = require('express');

const Pokemon = require('./models/pokemon.js');

// set express()to a variable
const app = express();

//set a variable of port to 3000
const port = 3000;
const mongoose = require('mongoose');

// Add dotenv
require('dotenv').config();

// Mongoose info
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, 
    useUnifiedTopology: true });
    mongoose.connection.once('open', ()=> {
        console.log('connected to mongo');
    });
    
// Index : Show all the things!
// New : An empty form for a new thing
// Delete : Get rid of this particular thing!
// Update : Update this specific thing with this updateform
// Create : Make a new thing with this filled out form
// Edit : A prefilled form to update a specific thing
// Show : Show me this one thing!

//MIDDLEWARE here. ALWAYS PLACE MIDDLEWARE BEFORE ROUTES
app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});

//near the top, around other app.use() calls 
app.use(express.urlencoded({extended:true}));


// View engines
app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine
());


// Data
// const Pokemon = require('./models/pokemon.js');

// Routes here
// include a get route /that will res.send('Welcome to the Pokemon App!');so that when you got to localhost:3000, you will see Welcome to the Pokemon App!
app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!');
});

app.get('/pokemon', (req, res)=>{
    Pokemon.find({}, (error, allPokemons)=>{
        res.render('Index', {
            pokemon: allPokemons
        });
    });
});

app.get('/pokemon/new', (req, res) => {
    res.render('../views/New');
});

// app.get('/pokemon', (req, res) => {
    // res.render('../views/Index', { pokemon: pokemon });
// });

app.post('/pokemon', (req, res)=>{
    console.log('creating a pokemon');
    console.log(req.body);
    Pokemon.create(req.body, (error, createdPokemon)=>{
        res.redirect('/pokemon');
    });
});

// Setting up show route
// app.get('/pokemon/:id', (req, res) => {
    // res.send(req.params.id);
    // res.render('../views/Show', {
        // pokemon: pokemon[req.params.id] //there 
    // }
    // )
// });

app.get('/pokemon/:id', (req, res)=>{
    Pokemon.findById(req.params.id, (err, foundPokemon)=>{
        res.render('Show', {
            pokemon : foundPokemon
        });
    });
});



// set your app to listen to the port and include a console.log(), so that you can tell when your server is running

app.listen(port, () => {
    console.log(`listening on port, ${port}`);
});