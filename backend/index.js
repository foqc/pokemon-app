// app.js
const express = require("express");
const cors = require("cors");
const PokemonService = require("./services/pokemon.service");
const pokemonRouter = require("./router/pokemon.router");
const pokemonData = require("./data/pokemon.data");

const app = express();
const port = 3000;

app.use(cors());

const service = new PokemonService(pokemonData);

app.use("/pokemon", pokemonRouter(service));

app.listen(port, () => {
  console.log(`Pokemon API server listening at http://localhost:${port}`);
});
