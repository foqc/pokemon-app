import { http } from "../../shared/libs/http";
import type {
  PokemonDetail,
  PokemonListResponse,
} from "../../entities/pokemon";
import type { AxiosResponse } from "axios";

const API = "https://pokeapi.co/api/v2";

export const pokemonClient = {
  list: (offset: number, limit: number): Promise<PokemonListResponse> => {
    return http
      .get<PokemonListResponse>(`${API}/pokemon`, { params: { offset, limit } })
      .then((res: AxiosResponse<PokemonListResponse>) => res.data);
  },

  detail: (nameOrId: string): Promise<PokemonDetail> => {
    return http
      .get<PokemonDetail>(`${API}/pokemon/${nameOrId}`)
      .then((res: AxiosResponse<PokemonDetail>) => res.data);
  },
};

export function idFromUrl(url: string): string {
  const parts = url.split("/").filter(Boolean);
  return parts[parts.length - 1];
}

export function spriteUrlById(id: string | number): string {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
}
