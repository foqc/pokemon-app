import { useAuth } from "../auth/hooks/useAuth";
import { PokemonList } from "../pokemon/components/PokemonList";

export const HomePage = () => {
  const { logout } = useAuth();

  return (
    <div className="mx-auto max-w-6xl p-4">
      <header className="mb-4 flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Pokémon Finder</h1>
        <button
          onClick={logout}
          className="rounded-xl border px-3 py-1.5 text-sm hover:bg-slate-50"
        >
          Logout
        </button>
      </header>
      <PokemonList />
    </div>
  );
};
