const React = require('react');

const myContainer = {
    backgorundColor: '#262626',
    color: '#262626',
    backgroundImage: 'url(https://wallpapercave.com/wp/wp2098819.jpg)',
    width: '100vw',
    backgroundSize :'cover',
    marginTop: '-10px', 
    marginLeft: '-20px',
    marginBottom: '-130px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '-20px',
    };


const title = {
    padding: '10px 35px',
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

const namelink = {
    color: '#CD565C',
}

const nav = {
    marginTop: '50px',
    marginBottom: '60px',
}
const link = {
    textDecoration: 'none',
    color: '#CD565C',
    fontSize: '1.2rem',
    backgroundColor: '#ffffff',
    padding: '10px 15px',
    borderRadius: '8px',
    fontWeight: 'bold', 
    marginLeft: '55px',
    boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.35)', 
}

const styleImage = {
    width: '100px',
}

const Index = ({pokemon}) => {
    // map through pokemon list and create a new array with capitalized names
// In return, map through the new capitalized names array and display them, along with their image links
    return(
        <div style={myContainer}>
            <h1 style={title}>See All The Pokemon!</h1>
            
            <ul style={content}>
                
                {pokemon.map((character, i) => {
                    return(
                    <li key={i} style={{marginBottom: 
                    '10px'}}>

                        <b>Name: </b> 
                        <a style={namelink}href={`/pokemon/${character._id}`}>{character.name.charAt(0).toUpperCase() + character.name.slice(1)}
                        </a>
                        <br></br> 
                        <b>Photo </b>
                        <br></br> <img style={styleImage} src={character.img + ".jpg"} />
                    </li>
                    );
                })}
            </ul>    

            <nav style={nav}>
                <a style={link} href="/pokemon/new">Create a New Pokemon</a>
            </nav>
        </div>
    )
}
module.exports = Index;