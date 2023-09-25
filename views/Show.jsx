// Import React
const React = require("react");

// Define your JSX component
const Show = ({ pokemon, index }) => {
  // Inline styles as an object
  const headerStyle = {
    textAlign: "center",
    backgroundColor: "#007BFF",
    color: "white",
    padding: "20px",
  };

  // Capitalize the first letter of a string
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  // Process the Pokémon data to capitalize names
  const capitalizedPokemonName = capitalizeFirstLetter(pokemon.name);
  const imageUrl = `${pokemon.img}.jpg`;

  return (
    <html>
      <head>
        <title>See All The Pokemon</title>
      </head>
      <body>
        <div>
          <h1 style={headerStyle}>Gotta Catch 'Em All</h1>
          <a href="/">Back</a>
          <h2>{capitalizedPokemonName}</h2>
          <img src={imageUrl} alt={`${capitalizedPokemonName} Image`} />
          <a href="/">Back</a>
        </div>
      </body>
    </html>
  );
};

// Export the component
module.exports = Show;
