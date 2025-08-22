class PokemonService {
  constructor(data) {
    this.data = data;
  }

  getPokemonList(page, limit) {
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const results = this.data.slice(startIndex, endIndex).map((p) => ({
      name: p.name,
      url: `/pokemon/${p.id}`,
    }));

    return {
      count: this.data.length,
      results,
    };
  }

  getPokemon(idOrName) {
    const pokemon = this.data.find(
      (p) =>
        p.id.toString() === idOrName.toLowerCase() ||
        p.name === idOrName.toLowerCase()
    );
    return pokemon;
  }
}

module.exports = PokemonService;
