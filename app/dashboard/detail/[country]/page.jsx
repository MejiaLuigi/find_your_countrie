'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

export default function CountryDetailPage() {
  const { country } = useParams();
  const [data, setData] = useState(null);
  const [borderCountries, setBorderCountries] = useState([]);

  useEffect(() => {
    const fetchCountry = async () => {
      const res = await fetch(
        `https://restcountries.com/v3.1/name/${encodeURIComponent(country)}?fullText=true&fields=name,flags,population,region,subregion,capital,tld,languages,currencies,borders`
      );
      const json = await res.json();
      const countryData = json[0];
      setData(countryData);

      if (countryData.borders?.length > 0) {
        const codes = countryData.borders.join(',');
        const borderRes = await fetch(
          `https://restcountries.com/v3.1/alpha?codes=${codes}&fields=name,cca3`
        );
        const borderJson = await borderRes.json();
        const borderNames = borderJson.map((c) => c.name.common);
        setBorderCountries(borderNames);
      } else {
        setBorderCountries([]);
      }
    };

    fetchCountry();
  }, [country]);

  if (!data) return <p className="text-center">Cargando detalle...</p>;

  const nativeName = Object.values(data.name.nativeName || {})[0]?.common || 'N/A';
  const currencyCodes = data.currencies
    ? Object.keys(data.currencies).join(', ')
    : 'N/A';
  const languages = data.languages
    ? Object.values(data.languages).join(', ')
    : 'N/A';

  return (
    <div className="p-6 max-w-6xl mx-auto text-text-light dark:text-text-dark">
      <button
        onClick={() => history.back()}
        className="mb-10 px-6 py-2 bg-element-light dark:bg-element-dark rounded shadow hover:brightness-95 text-center"
      >
        ← Back
      </button>

      <div className="grid md:grid-cols-2 gap-16 items-start">
        
        <img
          src={data.flags.png}
          alt={`${data.name.common} flag`}
          className="w-full max-w-md object-cover shadow-lg"
        />

        
        <div className="flex flex-col justify-between gap-8">
          <h1 className="text-3xl font-extrabold">{data.name.common}</h1>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <p><strong>Native Name:</strong> {nativeName}</p>
              <p><strong>Population:</strong> {data.population.toLocaleString()}</p>
              <p><strong>Region:</strong> {data.region}</p>
              <p><strong>Sub Region:</strong> {data.subregion || 'N/A'}</p>
              <p><strong>Capital:</strong> {data.capital?.[0] || 'N/A'}</p>
            </div>
            <div className="flex flex-col gap-2">
              <p><strong>Top Level Domain:</strong> {data.tld?.join(', ') || 'N/A'}</p>
              <p><strong>Currencies:</strong> {currencyCodes}</p>
              <p><strong>Languages:</strong> {languages}</p>
            </div>
          </div>

          
          <div>
            <strong>Border Countries:</strong>
            {borderCountries.length > 0 ? (
              <div className="flex flex-wrap gap-2 mt-2">
                {borderCountries.map((name, index) => (
                  <span
                    key={index}
                    className="bg-element-light dark:bg-element-dark px-4 py-1 rounded shadow text-sm"
                  >
                    {name}
                  </span>
                ))}
              </div>
            ) : (
              <span className="ml-2">None</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}