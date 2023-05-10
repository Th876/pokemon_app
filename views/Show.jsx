const React = require('react')
 const showContainer = {
    backgroundImage: 'url(https://c4.wallpaperflare.com/wallpaper/725/791/792/pokemon-pikachu-wallpaper-preview.jpg)',
    width: '100vw',
    backgroundSize :'cover',
    marginTop: '-10px', 
    marginLeft: '-20px',
    marginBottom: '-130px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
 }

 const heading = {
    padding: '10px 35px',
    fontSize: '2.5rem',
    backgroundColor: '#000000',
    color: '#ffffff',
 }

 const subheading = {
    padding: '7px 30px',
    fontSize: '1.5rem',
    color: '#000000',
    backgroundColor: '#ffffff',
 }

 const buttonContainer = {
    marginTop: '30px',
 }


 const link = {
    textDecoration: 'none',
    color: '#CD565C',
    fontSize: '1.5rem',
    backgroundColor: '#ffffff',
    padding: '7px 15px',
    borderRadius: '8px',
}

const Show = ({ pokemon }) => {
  return (
  <div style={showContainer}>
    <h1 style={heading}>Gotta Catch 'Em All</h1>
    <h2 style={subheading}>Name: {pokemon.name}</h2>
    <b style={subheading}>Photo </b> <br>
    </br><img src={pokemon.img + ".jpg"} />  
    
    <div style={buttonContainer}>
            <a style={link} href="/pokemon">Back</a>

    </div>
</div>
      );
     }
  module.exports  = Show;