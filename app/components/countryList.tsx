import React from "react";

export type CountryLisProps = {
  countries: {
    flag: string;
    name: string;
    capital: string;
  }[];
};

export default function CountryList({ countries }: CountryLisProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {countries.map((country) => (
        <div
          key={country.name}
          className="border rounded-lg p-4 flex flex-col items-center"
        >
          <div className="text-6xl mb-4">{country.flag}</div>
          <h2 className="text-xl font-bold">{country.name}</h2>
          <p className="text-gray-600">{country.capital}</p>
        </div>
      ))}
    </div>
  );
}
