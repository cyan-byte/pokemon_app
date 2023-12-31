// import the Express module
const express = require("express");
// create an Express application
const app = express();
//  the following lines of code are needed for our application to be able to use the JSX View Engine
const jsxEngine = require("jsx-view-engine");
// Define a port number for your server
const port = 3000;
// Set this 'database' to a variable called pokemon in your server.jsfile
const pokemon = require("./models/pokemon");

app.set("view engine", "jsx");
app.engine("jsx", jsxEngine());

// Create a get route /pokemon that will res.send(pokemon), which will display your pokemon data as json in the browser
app.get("/pokemon", (req, res) => {
  // Render the Index.jsx file
  res.render("Index", { pokemon: pokemon });
});

// define a route that sends a welcome message
app.get("/", (req, res) => {
  res.send("Welcome to the Pokemon App!");
});

app.get("/pokemon/:id", (req, res) => {
    const pokemonIndex = +req.params.id;
    const selectedPokemon = pokemon[pokemonIndex];
    res.render("Show", { pokemon: selectedPokemon });
  });

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
