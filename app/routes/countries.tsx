import { useEffect, useState } from "react";
import { Link } from "react-router";
import CountryList from "~/components/countryList";
import { regionKey } from "~/constants/storageKeys";
import { euCountries, allEuropeanCountries } from "~/utils/countries";
import { sortedCountries } from "~/utils/sort";
import type { Region } from "./region";

export default function Flags() {
  const [region, setRegion] = useState<Region>("eu");
  
  const getCountriesForRegion = (selectedRegion: Region) => {
    return selectedRegion === "eu" ? euCountries : allEuropeanCountries;
  };

  useEffect(() => {
    const storedRegion = localStorage.getItem(regionKey) as Region;
    if (storedRegion) {
      setRegion(storedRegion);
    }
  }, []);

  const currentCountries = getCountriesForRegion(region);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex items-center gap-4 mb-8">
        <h1 className="text-4xl font-bold">Listado de Banderas</h1>
        <span className="text-lg text-gray-600">
          ({region === "eu" ? "Unión Europea" : "Toda Europa"} - {currentCountries.length} países)
        </span>
      </div>
      <CountryList countries={sortedCountries(currentCountries)} />
      <Link
        to="/countries"
        className="mb-8 mt-8 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Volver a selección
      </Link>
    </div>
  );
}
