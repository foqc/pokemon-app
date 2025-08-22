import { useMemo, useState } from "react";
import { usePokemonList } from "../hooks/usePokemonList";
import { PokemonCard } from "./PokemonCard";
import { SearchInput } from "../../shared/components/SearchInput";
import { Pagination } from "../../shared/components/Pagination";
import { PokemonDetailModal } from "./PokemonDetailModal";

const PAGE_SIZE = 20;

export const PokemonList = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<string | null>(null);

  const { data, isLoading, isError, refetch, isFetching } = usePokemonList(
    page,
    PAGE_SIZE
  );

  const filtered = useMemo(() => {
    const list = data?.results ?? [];
    if (!search) return list;
    return list.filter((p: { name: string }) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [data, search]);

  return (
    <div>
      <div className="mb-4">
        <SearchInput
          value={search}
          onChange={(value: string) => {
            setSearch(value);
          }}
        />
      </div>

      {isLoading && <p>Loading…</p>}
      {isError && (
        <div className="rounded-xl border p-3">
          <p className="text-red-600">Failed to load Pokémon.</p>
          <button
            className="mt-2 rounded-xl border px-3 py-1.5"
            onClick={() => refetch()}
          >
            Retry
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filtered.map((p) => (
          <PokemonCard
            key={p.name}
            name={p.name}
            url={p.url}
            onClick={() => setSelected(p.name)}
          />
        ))}
      </div>

      {data && (
        <Pagination
          page={page}
          pageSize={PAGE_SIZE}
          total={data.count}
          onPageChange={setPage}
        />
      )}

      <PokemonDetailModal
        nameOrId={selected}
        open={!!selected}
        onOpenChange={(o) => !o && setSelected(null)}
      />

      {isFetching && <p className="mt-2 text-sm text-slate-500">Updating…</p>}
    </div>
  );
};
