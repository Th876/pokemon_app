const React = require('react');
const { baseModelName } = require('../models/pokemon');

const newContainer = {
    backgorundColor: '#262626',
    color: '#262626',
    backgroundImage: 'url(https://wallpapercave.com/wp/wp2098819.jpg)',
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

    const link = {
        color: '#CD565C',
        fontSize: '0.8rem',
        backgroundColor: '#ffffff',
        padding: '5px 5px',
        borderRadius: '8px',
        fontWeight: 'bold', 
        marginLeft: '55px',
    }

    const inputText = {
        marginBottom: '10px',
    }


function New () {
    return (
        <div style={newContainer}>
            <h1 style={title}>New Pokemon page</h1>
            {/* NOTE: action will be the route, method will be the HTTP verb */}
            <form style={content} action="/pokemon" method="POST">
              Name: <input type="text" name="name" style={inputText}/><br/>
              Photo: <input type="text" name="img" /><br/>
              <br/>
              <input type="submit" name="" style={link} value="Create New Pokemon"/>
            </form>
        </div>
        );
    }

module.exports = New;