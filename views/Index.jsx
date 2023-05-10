const React = require('react');

const myContainer = {
    color: '#262626',
    backgroundImage: 'url(https://www.pockettactics.com/wp-content/sites/pockettactics/2023/01/Pok%C3%A9mon-wallpapers-6.jpg)',
    width: '100vw',
    height: '100vh',
    backgroundSize :'cover',
    marginTop: '-10px', 
    marginLeft: '-20px',
    marginBottom: '-130px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    };


const title = {
    textAlign: 'center',
    padding: '10px',
    fontSize: '2.5rem',
    backgroundColor: '#ffffff',
}

const content = {
    color: '#f6fff8',
    backgroundColor: '#262626',
    marginLeft: '30px',
    width: '400px',
    padding: '45px 45px 45px 50px',
    fontSize: '1.1rem',
}

const link = {
    color: '#CD565C',
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
                
                {capitalizePokemonName.map((character, i) => {
                    return(
                    <li key={i} style={{marginBottom: 
                    '10px'}}>
                        <b>Name: </b> 
                        <a style={link} href={`/pokemon/${i}`}>{character.name}
                        </a>
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