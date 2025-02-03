// app/routes/game.tsx
import { useState, useEffect } from "react";
import { Link } from "react-router";
import CountryList from "~/components/countryList";
import { countriesKey } from "~/constants/storageKeys";
import { countries } from "~/utils/countries";
import { sortedCapitals, sortedCountries } from "~/utils/sort";
import Confetti from "react-confetti";

function shuffleArray(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export default function Game() {
  const checkShuffledCountries = () => {
    const storedCountries = localStorage.getItem(countriesKey);
    const decodeCountries = JSON.parse(storedCountries || "[]");
    if (decodeCountries.length === 0) {
      return shuffleArray([...countries]);
    }
    return shuffleArray([...decodeCountries]);
  };
  const [shuffledCountries, setShuffledCountries] = useState<typeof countries>(
    []
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState({ correct: 0, incorrect: 0 });
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCapital, setSelectedCapital] = useState("");
  const [incorectAnswers, setIncorrectAnswers] = useState<typeof countries>([]);

  useEffect(() => {
    setShuffledCountries(checkShuffledCountries);
  }, []);

  const handleNext = () => {
    if (
      selectedCountry === shuffledCountries[currentIndex].name &&
      selectedCapital === shuffledCountries[currentIndex].capital
    ) {
      setScore({ ...score, correct: score.correct + 1 });
    } else {
      setScore({ ...score, incorrect: score.incorrect + 1 });
      setIncorrectAnswers([
        ...incorectAnswers,
        shuffledCountries[currentIndex],
      ]);
    }
    setCurrentIndex(currentIndex + 1);
    setSelectedCountry("");
    setSelectedCapital("");
  };

  const handleRestart = () => {
    setShuffledCountries(checkShuffledCountries);
    setCurrentIndex(0);
    setScore({ correct: 0, incorrect: 0 });
  };

  if (currentIndex >= shuffledCountries.length) {
    return (
      <div className="flex flex-col items-center center min-h-screen">
        {score.incorrect === 0 && <Confetti width={400} height={400} />}
        <h1 className="text-4xl font-bold mb-4">Quiz terminado</h1>
        <div className="text-center mb-4">
          <p className="text-xl text-green-600">
            ✔︎ Aciertos: <span className="font-bold">{score.correct}</span>
          </p>
          <p className="text-xl text-red-400">
            ❌ Errores: <span className="font-bold">{score.incorrect}</span>
          </p>
        </div>
        <h2>Listado de errores</h2>
        <CountryList countries={incorectAnswers} />
        <Link
          to="/"
          onClick={handleRestart}
          className="m-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Reiniciar
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-center items-center flex-col gap-2 text-9xl m-4">
        <div className="text-4xl font-bold">
          {currentIndex} de {shuffledCountries.length}
        </div>
        <span>{shuffledCountries[currentIndex].flag}</span>
      </div>
      <div className="flex justify-center gap-3 mb-6">
        <div>
          <label>
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="block w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
            >
              <option value="">Que pais es</option>
              {sortedCountries(shuffledCountries).map((country) => (
                <option key={country.name} value={country.name}>
                  {country.name}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div>
          <label>
            <select
              value={selectedCapital}
              onChange={(e) => setSelectedCapital(e.target.value)}
              className="block w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
            >
              <option value="">Cual es su capital</option>
              {sortedCapitals(shuffledCountries).map((country) => (
                <option key={country.capital} value={country.capital}>
                  {country.capital}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>
      <div className="flex justify-center gap-9">
        <Link
          to="/"
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
        >
          Reiniciar
        </Link>
        <button
          onClick={handleNext}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Siguiente
        </button>
      </div>
      {incorectAnswers.length > 0 && (
        <div className="flex flex-col items-center center min-h-screen">
          <h2 className="py-4">Listado de errores</h2>
          <CountryList countries={incorectAnswers.reverse()} />
        </div>
      )}
    </div>
  );
}
