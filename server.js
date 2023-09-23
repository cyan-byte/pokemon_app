// import the Express module
const express = require("express");
// create an Express application
const app = express();
//  the following line of code is needed for our application to be able to use the JSX View Engine
const jsxEngine = require("jsx-view-engine");
// Define a port number for your server
const port = 3000;
// Set this 'database' to a variable called pokemonin your server.jsfile
const pokemon = require("./models/pokemon");
// Create a get route /pokemon that will res.send(pokemon), which will display your pokemon data as json in the browser
app.get("/pokemon/", (req, res) => {
    // res.send(fruits);
    res.render("pokemon/Index", { pokemon: pokemon });
  });

// define a route that sends a welcome message
app.get("/", (req, res) => {
  res.send("Welcome to the Pokemon App!");
});

// Start the server and listen on teh specified port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
