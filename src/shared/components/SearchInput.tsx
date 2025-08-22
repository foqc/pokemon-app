type SearchInputProps = {
  value: string;
  onChange: (value: string) => void;
};

export const SearchInput = ({
  value,
  onChange,
  ...props
}: SearchInputProps) => {
  return (
    <input
      type="text"
      className="w-full rounded-xl border px-3 py-2 outline-none focus:ring"
      placeholder="Search Pokemon..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      {...props}
    />
  );
};
