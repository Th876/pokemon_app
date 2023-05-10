// require express
const express = require('express');

const pokemon = require('./models/pokemon.js');

// set express()to a variable
const app = express();

//set a variable of port to 3000
const port = 3000;

// Index : Show all the things!
// New : An empty form for a new thing
// Delete : Get rid of this particular thing!
// Update : Update this specific thing with this updateform
// Create : Make a new thing with this filled out form
// Edit : A prefilled form to update a specific thing
// Show : Show me this one thing!

// View engines
app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine
());

// Routes here
// include a get route /that will res.send('Welcome to the Pokemon App!');so that when you got to localhost:3000, you will see Welcome to the Pokemon App!
app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!');
});

app.get('/pokemon', (req, res) => {
    res.render('../views/Index', { pokemon: pokemon });
});

// Setting up show route
app.get('/pokemon/:id', (req, res) => {
    // res.send(req.params.id);
    res.render('../views/Show', {
        pokemon: pokemon[req.params.id] //there 
    }
    )
});




// set your app to listen to the port and include a console.log(), so that you can tell when your server is running

app.listen(port, () => {
    console.log(`listening on port, $
{port}`);
});