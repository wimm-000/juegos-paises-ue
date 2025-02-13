import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { countriesKey } from "~/constants/storageKeys";
import { countries } from "~/utils/countries";
import { sortedCountries } from "~/utils/sort";

export default function Index() {
  const [selectedCountries, setSelectedCountries] = useState<typeof countries>(
    []
  );
  const [randomItems, setRandomItems] = useState(5);

  const navigate = useNavigate();

  useEffect(() => {
    setSelectedCountries(() => {
      const storedCountries = localStorage.getItem(countriesKey);
      const decodeCountries = JSON.parse(storedCountries || "[]");
      return decodeCountries;
    });
  }, []);

  const handleCheckboxChange = (country: (typeof countries)[0]) => {
    const currentlySelected = selectedCountries.find(
      (c) => c.name === country.name
    )
      ? [...selectedCountries].filter((c) => c.name !== country.name)
      : [...selectedCountries, country];

    setSelectedCountries(currentlySelected);

    const currentSelectedCountries = JSON.stringify([...currentlySelected]);
    localStorage.setItem(countriesKey, currentSelectedCountries);
  };

  const onSelectAll = () => {
    setSelectedCountries(countries);
    localStorage.setItem(countriesKey, JSON.stringify(countries));
  };

  const onClear = () => {
    setSelectedCountries([]);
    localStorage.removeItem(countriesKey);
  };

  const onRandomItems = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRandomItems(Number(e.target.value));
  };

  const getRandomCountries = (num: number) => {
    const shuffled = countries.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  };

  const onSelectRandom = () => {
    const randomSelectedCountries = getRandomCountries(randomItems);
    localStorage.setItem(countriesKey, JSON.stringify(randomSelectedCountries));
    navigate("/game");
  };

  return (
    <div className="flex flex-col items-center  h-screen">
      <h1 className="text-2xl font-bold mb-4">Selecciona las banderas</h1>
      <div className="flex gap-2 pb-8">
        <button
          onClick={onSelectAll}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
        >
          Seleccionar todo
        </button>
        <button
          onClick={onClear}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
        >
          Borrar todo
        </button>
        <button
          onClick={onSelectRandom}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Aleatrio
        </button>
        <input
          className="border-2 rounded border-gray-300  p-2"
          type="number"
          value={randomItems}
          onChange={onRandomItems}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {sortedCountries(countries).map((country) => (
          <label
            key={country.name}
            className="flex items-center justify-center p-2 cursor-pointer"
          >
            <input
              type="checkbox"
              value={country.name}
              checked={!!selectedCountries.find((c) => c.name === country.name)}
              onChange={() => handleCheckboxChange(country)}
              className="hidden"
            />
            <div
              className={`w-32 h-25 rounded-2xl center overflow-hidden flex justify-center flex-col items-center bg-cover bg-center border-2 ${
                !!selectedCountries.find((c) => c.name === country.name)
                  ? "border-blue-500 bg-blue-100"
                  : "border-gray-300"
              }`}
            >
              <div className="text-6xl">{country.flag}</div>
              <div className="text-l font-bold">{country.name}</div>
            </div>
          </label>
        ))}
      </div>

      <div className="flex gap-2 py-8">
        <Link to="/game">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
            Empezar
          </button>
        </Link>
        <Link to="/review">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
            Repasar
          </button>
        </Link>
      </div>
    </div>
  );
}
