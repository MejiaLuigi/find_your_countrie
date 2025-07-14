import Image from 'next/image'

export default function Card({ country, population, region, capital, imageUrl }) {
  return (
    <>
      <div className="w-70 h-90 rounded-lg shadow-lg bg-#ffffffff dark:bg-#2b3945ff flex flex-col m-2">
        <Image src={imageUrl} width={400} height={400} className='m-0' alt={country}/>
        <div className="card-content p-4 text-white flex flex-col justify-between items-start p-5 ">
          <h2 className="text-black">{country}</h2>
          <br />
          <p className="text-black dark:text-#ffffffff">Population: <span className='text-#535353 dark:text-#111517ff'>{population}</span></p>
          <p className="text-black dark:text-#ffffffff">Region: <span className='text-#535353 dark:text-#111517ff'>{region}</span></p>
          <p className="text-black dark:text-#ffffffff">Capital: <span className='text-#535353 dark:text-#111517ff'>{capital}</span></p>
        </div>
      </div>
    </>
  );
}