const React = require('react')
 const showContainer = {
    backgroundImage: 'url(https://cdn.wallpapersafari.com/98/7/Iu9XxP.jpg)',
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
 }

 const heading = {
    padding: '10px 35px',
    fontSize: '2.5rem',
    backgroundColor: '#000000',
    color: '#ffffff',
 }

 const subheading = {
    fontSize: '1.5rem',
    color: '#ffffff',

 }

 const buttonContainer = {
    marginTop: '30px',
 }


 const link = {
    textDecoration: 'none',
    color: '#CD565C',
    fontSize: '1.5rem',
    backgroundColor: '#f4f3ee',
    padding: '7px 15px',
    borderRadius: '8px',
    boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.35)',
    fontWeight: 'bold',
}

const Show = ({ pokemon }) => {
  return (
  <div style={showContainer}>
    <h1 style={heading}>Gotta Catch 'Em All</h1>
    <h2 style={subheading}>Name: {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
    <b style={subheading}>Photo </b> <br>
    </br><img src={pokemon.img + ".jpg"} />  
    
    <div style={buttonContainer}>
            <a style={link} href="/pokemon">Back</a>
    </div>
</div>
      );
     }
  module.exports  = Show;