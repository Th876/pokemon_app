const React = require('react');
const pokemon = require('../models/pokemon');
const myContainer = {
    color: '#e5989b',
    backgroundColor: '#262626',
    width: '100vw',
    height: '100vh',
    marginTop: '-30px', 
    marginLeft: '-20px',
    };


const title = {
    textAlign: 'center',
    paddingTop: '30px'
}

const content = {
    color: '#ffe5d9',
}


const Index = ({pokemon}) => {
    // map through pokemon list and create a new array with capitalized names
const capitalizePokemonName = pokemon.map((character) => ({
    ...character,
    name: character.name.charAt(0).toUpperCase() + character.name.slice(1),

}));
// In return, map through the new capitalized names array and display them, along with their image links
    return(
        <div style={myContainer}>
            <h1 style={title}>See All The Pokemon!</h1>
            
            <ul style={content}>
                
                {capitalizePokemonName.map((character) => {
                    return(
                    <li key={character.name} style={{marginBottom: 
                    '10px'}}>
                        <b>Name: </b> {character.name}
                        <br></br> 
                        <b>Image:</b> {character.img}. 
                    </li>
                    );
                })}
            </ul>    
        </div>
    )
}
module.exports = Index;