import { Link } from "react-router";
import CountryList from "~/components/countryList";
import { countries } from "~/utils/countries";
import { sortedCountries } from "~/utils/sort";

export default function Flags() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-8">Listado de Banderas</h1>
      <CountryList countries={sortedCountries(countries)} />
      <Link
        to="/"
        className="mb-8 mt-8 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
