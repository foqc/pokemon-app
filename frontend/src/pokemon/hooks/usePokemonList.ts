import { useQuery, type UseQueryResult } from "@tanstack/react-query";
import { pokemonClient } from "../services/pokemonClient";
import { qk } from "../../shared/libs/query";
import type { PokemonListResponse } from "../../entities/pokemon";

export const usePokemonList = (
  page: number,
  pageSize: number
): UseQueryResult<PokemonListResponse, unknown> => {
  const offset = (page - 1) * pageSize;
  return useQuery({
    queryKey: qk.pokemon.list(offset, pageSize),
    queryFn: () => pokemonClient.list(offset, pageSize),
  });
};
