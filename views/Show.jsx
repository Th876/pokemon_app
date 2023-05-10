const React = require('react')

const Show = ({ pokemon }) => {
  return (
      <div>
      <h1>Pokemon Show Page </h1>
      {pokemon.name}
        {pokemon.img}
      </div>
      );
     }
  module.exports  = Show;