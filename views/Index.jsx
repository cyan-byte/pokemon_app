// Import React
const React = require("react");

// Define your JSX component
const Index = ({ pokemon }) => {
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
  const capitalizedPokemonData = pokemon.map((pokemon) => ({
    ...pokemon,
    name: capitalizeFirstLetter(pokemon.name),
  }));

  return (
    <html>
      <head>
        <title>See All The Pokemon</title>
      </head>
      <body>
        <div>
          {/* Inline styles applied to the <h1> element */}
          <h1 style={headerStyle}>See All The Pokemon!</h1>
        </div>
        <ul>
          {capitalizedPokemonData.map((pokemon, index) => (
            <li key={index}>{pokemon.name}</li>
          ))}
        </ul>
      </body>
    </html>
  );
};

// Export the component
module.exports = Index;
