/**
 * Centralized query keys for TanStack Query (React Query).
 * Keep all query key shapes here so they are consistent across the app.
 */

export const qk = {
  pokemon: {
    // list key uses offset & limit so it maps directly to the PokéAPI pagination
    list: (offset: number, limit: number) =>
      ["pokemon", "list", offset, limit] as const,
    // detail key by name or id
    detail: (nameOrId: string | number) =>
      ["pokemon", "detail", String(nameOrId)] as const,
  },
};

export type QueryKey = readonly (string | number)[];
