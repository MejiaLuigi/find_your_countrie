import Image from 'next/image'

export default function Card({ country, population, region, capital, imageUrl }) {
  return (
    <>
      <div className="w-72 h-[400px] rounded-lg shadow-lg bg-element-light text-text-light dark:bg-element-dark dark:text-text-dark flex flex-col my-5 mx-4">
        <div className="relative w-full h-40">
        <Image src={imageUrl} className='m-0' alt={country} layout="fill" objectFit="cover"/>
        </div>
        <div className="card-content flex flex-col justify-between items-start p-5 my-6">
          <h2 className="text-text-light dark:text-text-dark">{country}</h2>
          <br />
          <p className="text-text-light dark:text-text-dark">Population: <span className='text-#535353 dark:text-#111517ff'>{population}</span></p>
          <p className="text-text-light dark:text-text-dark">Region: <span className='text-#535353 dark:text-#111517ff'>{region}</span></p>
          <p className="text-text-light dark:text-text-dark">Capital: <span className='text-#535353 dark:text-#111517ff'>{capital}</span></p>
        </div>
      </div>
    </>
  );
}