// Import React
const React = require("react");

// Define your JSX component
const Index = ({ pokemon }) => {
  // Inline styles as an object. This holds the CSS styles for the component's header below
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
  const capitalizedPokemonData = pokemon.map((poke) => ({
    ...pokemon,
    name: capitalizeFirstLetter(poke.name),
  }));

  return (
    <html>
      <head>
        <title>See All The Pokemon</title>
      </head>
      <body>
        <div>
          <h1 style={headerStyle}>See All The Pokemon!</h1>
        </div>
        <ul>
          {capitalizedPokemonData.map((poke, index) => (
            <li key={index}>
              <a href={`/pokemon/${index}`}>{poke.name}</a>
            </li>
          ))}
        </ul>
      </body>
    </html>
  );
};

// Export the component
module.exports = Index;
