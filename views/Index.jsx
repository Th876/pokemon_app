const React = require('react');
const myContainer = {
    color: '#ffffff',
    backgroundColor: '#000000',
    width: '100vw',
    height: '100vh',
    marginTop: '-30px', 
    marginLeft: '-20px',
    };


const title = {
    textAlign: 'center',
    paddingTop: '30px'
}

// const content {
// 
// }


function Index(props) {
    return(
        <div style={myContainer}>
            <h1 style={title}>See All The Pokemon!</h1>
            
        </div>
    )
}
module.exports = Index;