export type PokemonListResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: { name: string; url: string }[];
};

export type PokemonDetail = {
  id: number;
  name: string;
  sprites: {
    front_default: string | null;
    other?: Record<string, unknown>;
  };
  abilities: { ability: { name: string; url: string }; is_hidden: boolean }[];
  moves: { move: { name: string; url: string } }[];
  forms: { name: string; url: string }[];
};
