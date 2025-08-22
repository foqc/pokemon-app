import { useQuery } from "@tanstack/react-query";
import { pokemonClient } from "../services/pokemonClient";
import { qk } from "../../shared/libs/query";

export const usePokemonDetail = (nameOrId: string, enabled = true) => {
  return useQuery({
    queryKey: qk.pokemon.detail(nameOrId),
    queryFn: () => pokemonClient.detail(nameOrId),
    enabled,
  });
};
