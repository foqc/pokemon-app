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

  const maxPagesToShow = 5;
  const pages: (number | "...")[] = [];
  const startPage = Math.max(1, page - Math.floor(maxPagesToShow / 2));
  const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

  if (startPage > 1) {
    pages.push(1);
    if (startPage > 2) {
      pages.push("...");
    }
  }

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  if (endPage < totalPages) {
    if (endPage < totalPages - 1) {
      pages.push("...");
    }
    pages.push(totalPages);
  }

  return (
    <div className="flex items-center justify-center gap-1.5 mt-6 text-sm">
      <button
        onClick={() => onPageChange(page - 1)}
        disabled={page <= 1}
        className={`
          px-3 py-1.5 rounded-md border border-gray-300 transition-colors
          ${page <= 1 ? "text-gray-400 cursor-not-allowed" : "hover:bg-gray-100"}
        `}
      >
        Previous
      </button>

      {pages.map((p, index) =>
        p === "..." ? (
          <span key={index} className="px-3 py-1.5 text-gray-500">
            ...
          </span>
        ) : (
          <button
            key={p}
            onClick={() => onPageChange(p as number)}
            className={`
              px-3 py-1.5 rounded-md font-medium transition-colors
              ${
                p === page
                  ? "bg-slate-900 text-white"
                  : "bg-white text-slate-800 hover:bg-gray-100"
              }
            `}
          >
            {p}
          </button>
        )
      )}

      <button
        onClick={() => onPageChange(page + 1)}
        disabled={page >= totalPages}
        className={`
          px-3 py-1.5 rounded-md border border-gray-300 transition-colors
          ${page >= totalPages ? "text-gray-400 cursor-not-allowed" : "hover:bg-gray-100"}
        `}
      >
        Next
      </button>
    </div>
  );
};
