import type { FC } from "react";

type PaginationProps = {
  page: number;
  pageSize: number;
  total: number;
  onPageChange: (page: number) => void;
};

export const Pagination: FC<PaginationProps> = ({
  page,
  pageSize,
  total,
  onPageChange,
}) => {
  const totalPages = Math.ceil(total / pageSize);
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-center gap-2 mt-4">
      {pages.map((p) => (
        <button
          key={p}
          onClick={() => onPageChange(p)}
          className={`px-3 py-1 rounded-md border ${
            p === page ? "bg-slate-900 text-white" : "bg-white"
          }`}
        >
          {p}
        </button>
      ))}
    </div>
  );
};
