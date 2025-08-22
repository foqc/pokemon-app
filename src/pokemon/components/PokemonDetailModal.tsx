import * as Dialog from "@radix-ui/react-dialog";
import { usePokemonDetail } from "../hooks/usePokemonDetail";

interface Props {
  nameOrId: string | null;
  open: boolean;
  onOpenChange: (o: boolean) => void;
}

export const PokemonDetailModal = ({ nameOrId, open, onOpenChange }: Props) => {
  const { data, isLoading, isError } = usePokemonDetail(
    nameOrId || "",
    open && !!nameOrId
  );

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/40" />
        <Dialog.Content
          className="fixed left-1/2 top-1/2 w-[90vw] max-w-xl -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-4 shadow-xl focus:outline-none"
          aria-describedby={undefined}
        >
          <Dialog.Title className="mb-2 text-lg font-semibold capitalize">
            {nameOrId || "Details"}
          </Dialog.Title>
          {isLoading && <p>Loading…</p>}
          {isError && <p className="text-red-600">Failed to load details.</p>}
          {data && (
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <img
                  src={data.sprites?.front_default || ""}
                  alt={data.name}
                  className="h-16 w-16"
                />
                <div>
                  <p className="text-sm text-slate-600">ID: {data.id}</p>
                  <p className="capitalize">{data.name}</p>
                </div>
              </div>

              <section>
                <h3 className="mb-1 font-medium">Abilities</h3>
                <ul className="list-inside list-disc text-sm">
                  {data.abilities.map((a) => (
                    <li key={a.ability.name} className="capitalize">
                      {a.ability.name}
                      {a.is_hidden ? " (hidden)" : ""}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h3 className="mb-1 font-medium">Forms</h3>
                {data.forms.length ? (
                  <ul className="list-inside list-disc text-sm">
                    {data.forms.map((f) => (
                      <li key={f.name} className="capitalize">
                        {f.name}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-slate-600">No forms available.</p>
                )}
              </section>

              <section>
                <h3 className="mb-1 font-medium">Moves</h3>
                <div className="max-h-48 overflow-auto rounded border p-2 text-sm">
                  <ul className="columns-2 gap-4 sm:columns-3">
                    {data.moves.map((m) => (
                      <li
                        key={m.move.name}
                        className="break-inside-avoid capitalize"
                      >
                        {m.move.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            </div>
          )}

          <div className="mt-4 flex justify-end">
            <Dialog.Close asChild />
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
