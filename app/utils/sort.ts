import type { countries } from "./countries";

export const sortedCountries = (c: typeof countries) =>
  c.sort((a, b) => a.name.localeCompare(b.name));
export const sortedCapitals = (c: typeof countries) =>
  c.sort((a, b) => a.capital.localeCompare(b.capital));
