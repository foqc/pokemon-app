const pokemonData = [
  {
    id: 1,
    name: "bulbasaur",
    types: [{ type: { name: "grass" } }, { type: { name: "poison" } }],
    sprites: {
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    },
    abilities: [
      { ability: { name: "overgrow" }, is_hidden: false },
      { ability: { name: "chlorophyll" }, is_hidden: true },
    ],
    moves: [{ move: { name: "tackle" } }, { move: { name: "vine-whip" } }],
    forms: [{ name: "bulbasaur" }],
  },
  {
    id: 4,
    name: "charmander",
    types: [{ type: { name: "fire" } }],
    sprites: {
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    },
    abilities: [
      { ability: { name: "blaze" }, is_hidden: false },
      { ability: { name: "solar-power" }, is_hidden: true },
    ],
    moves: [{ move: { name: "scratch" } }, { move: { name: "ember" } }],
    forms: [{ name: "charmander" }],
  },
  {
    id: 7,
    name: "squirtle",
    types: [{ type: { name: "water" } }],
    sprites: {
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    },
    abilities: [
      { ability: { name: "torrent" }, is_hidden: false },
      { ability: { name: "rain-dish" }, is_hidden: true },
    ],
    moves: [{ move: { name: "tackle" } }, { move: { name: "water-gun" } }],
    forms: [{ name: "squirtle" }],
  },
  {
    id: 25,
    name: "pikachu",
    types: [{ type: { name: "electric" } }],
    sprites: {
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    },
    abilities: [
      { ability: { name: "static" }, is_hidden: false },
      { ability: { name: "lightning-rod" }, is_hidden: true },
    ],
    moves: [
      { move: { name: "thunder-shock" } },
      { move: { name: "quick-attack" } },
    ],
    forms: [{ name: "pikachu" }],
  },
  {
    id: 39,
    name: "jigglypuff",
    types: [{ type: { name: "normal" } }, { type: { name: "fairy" } }],
    sprites: {
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png",
    },
    abilities: [
      { ability: { name: "cute-charm" }, is_hidden: false },
      { ability: { name: "competitive" }, is_hidden: false },
      { ability: { name: "friend-guard" }, is_hidden: true },
    ],
    moves: [{ move: { name: "sing" } }, { move: { name: "pound" } }],
    forms: [{ name: "jigglypuff" }],
  },
  {
    id: 52,
    name: "meowth",
    types: [{ type: { name: "normal" } }],
    sprites: {
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png",
    },
    abilities: [
      { ability: { name: "pickup" }, is_hidden: false },
      { ability: { name: "technician" }, is_hidden: false },
      { ability: { name: "unnerve" }, is_hidden: true },
    ],
    moves: [{ move: { name: "scratch" } }, { move: { name: "growl" } }],
    forms: [{ name: "meowth" }],
  },
  {
    id: 54,
    name: "psyduck",
    types: [{ type: { name: "water" } }],
    sprites: {
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png",
    },
    abilities: [
      { ability: { name: "damp" }, is_hidden: false },
      { ability: { name: "cloud-nine" }, is_hidden: false },
      { ability: { name: "swift-swim" }, is_hidden: true },
    ],
    moves: [{ move: { name: "water-gun" } }, { move: { name: "confusion" } }],
    forms: [{ name: "psyduck" }],
  },
  {
    id: 143,
    name: "snorlax",
    types: [{ type: { name: "normal" } }],
    sprites: {
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png",
    },
    abilities: [
      { ability: { name: "immunity" }, is_hidden: false },
      { ability: { name: "thick-fat" }, is_hidden: false },
      { ability: { name: "gluttony" }, is_hidden: true },
    ],
    moves: [{ move: { name: "yawn" } }, { move: { name: "body-slam" } }],
    forms: [{ name: "snorlax" }],
  },
];

module.exports = pokemonData;
