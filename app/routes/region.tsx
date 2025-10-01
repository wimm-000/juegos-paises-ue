import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { regionKey } from "~/constants/storageKeys";

export type Region = "eu" | "all";

export default function RegionSelection() {
  const [selectedRegion, setSelectedRegion] = useState<Region>("eu");
  const navigate = useNavigate();

  useEffect(() => {
    const storedRegion = localStorage.getItem(regionKey) as Region;
    if (storedRegion) {
      setSelectedRegion(storedRegion);
    }
  }, []);

  const handleRegionChange = (region: Region) => {
    setSelectedRegion(region);
    localStorage.setItem(regionKey, region);
  };

  const handleContinue = () => {
    navigate("/countries");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-8">Selecciona la región</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div
          className={`cursor-pointer p-8 rounded-2xl border-4 transition-all ${
            selectedRegion === "eu"
              ? "border-blue-500 bg-blue-100"
              : "border-gray-300 hover:border-gray-400"
          }`}
          onClick={() => handleRegionChange("eu")}
        >
          <div className="text-center">
            <div className="text-6xl mb-4">🇪🇺</div>
            <h2 className="text-2xl font-bold mb-2">Unión Europea</h2>
            <p className="text-gray-600">27 países miembros de la UE</p>
          </div>
        </div>

        <div
          className={`cursor-pointer p-8 rounded-2xl border-4 transition-all ${
            selectedRegion === "all"
              ? "border-blue-500 bg-blue-100"
              : "border-gray-300 hover:border-gray-400"
          }`}
          onClick={() => handleRegionChange("all")}
        >
          <div className="text-center">
            <div className="text-6xl mb-4">🌍</div>
            <h2 className="text-2xl font-bold mb-2">Toda Europa</h2>
            <p className="text-gray-600">Todos los países europeos (~50)</p>
          </div>
        </div>
      </div>

      <button
        onClick={handleContinue}
        className="px-8 py-4 bg-blue-500 text-white text-xl rounded-lg hover:bg-blue-700 transition-colors"
      >
        Continuar
      </button>
    </div>
  );
}