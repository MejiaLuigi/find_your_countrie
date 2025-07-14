"use client";

import Input from "../ui/header/Input";
import SelectInput from "../ui/header/SelectInput";
import Card from "../ui/home/Card";
import { useEffect, useState } from "react";

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"; 

export default function Page() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasMounted, setHasMounted] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState("");
  const [searchCountrie, setSearchCountry] = useState("");

  useEffect(() => {
     setHasMounted(true);

    const getCountries = async () => {
      try {
        const res = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,flags,capital,region,population"
        );
        const data = await res.json();
        setCountries(data);
        setLoading(false);
      } catch (error) {
        console.error("Error al obtener países:", error);
      }
    };

    getCountries();
  }, []);

  if (!hasMounted) return null;

  if (loading || countries.length === 0) {
  return <p className="text-center">Cargando países...</p>;
}

const formatNumber = (num) => {
  return new Intl.NumberFormat('en-US').format(num); // o 'es-CO' si prefieres
};

  const options = [
    { value: "", label: "All Regions" }
  ];
  const regions = [...new Set(countries.map(country => country.region))];
  regions.forEach(region => {
    options.push({
      value: region,
      label: region
  })
})

const handleRegionChange = (e) => {
  setSelectedRegion(e.target.value);
  console.log("Selected region:", selectedRegion);
}

const searchCountriesByName = (e) => {
  setSearchCountry(e.target.value);
  console.log("Search country:", searchCountrie);
}

  return (
    <div className="px-5 flex flex-col justify-space-around border border-blue-500">
      <div className="flex flex-wrap items-center justify-between md:items-center md:justify-between mb-10">
        <div className="mb-5 md:mb-0">
          <Input placeholder="Search for a country..." icon={faMagnifyingGlass} onChange={searchCountriesByName} value={searchCountrie}/>
        </div>
        <div>
          <SelectInput options={options} onChange={handleRegionChange} value={selectedRegion}/>
        </div>
      </div>
      <div className=" flex flex-wrap flex-row items-center justify-between text-center md: flex justify-center items-center">
        {countries.map((country) => (
          <Card
            key={country.name?.common || index}
            imageUrl={country.flags.png}
            country={country.name.common}
            population={formatNumber(country.population) || "N/A"}
            region={country.region}
            capital={country.capital ? country.capital[0] : "N/A"}
          />
        ))}
      </div>
    </div>
  );
}