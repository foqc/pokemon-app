import { idFromUrl, spriteUrlById } from "../services/pokemonClient";

interface Props {
  name: string;
  url: string;
  onClick?: () => void;
}

export const PokemonCard = ({ name, url, onClick }: Props) => {
  const id = idFromUrl(url);
  const sprite = spriteUrlById(id);
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-3 rounded-xl border bg-white p-3 text-left shadow-sm transition hover:shadow"
      aria-label={`Open details for ${name}`}
    >
      <img src={sprite} alt={name} className="h-12 w-12" loading="lazy" />
      <span className="capitalize">{name}</span>
    </button>
  );
};
