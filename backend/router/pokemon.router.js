const express = require("express");

module.exports = (pokemonService) => {
  const router = express.Router();

  router.get("/", (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;
    const list = pokemonService.getPokemonList(page, limit);
    res.json(list);
  });

  router.get("/:idOrName", (req, res) => {
    const { idOrName } = req.params;
    const pokemon = pokemonService.getPokemon(idOrName);

    if (!pokemon) {
      return res.status(404).json({ error: "Pokemon not found" });
    }

    res.json(pokemon);
  });

  return router;
};
