import Image from 'next/image'

export default function Card({ country, population, region, capital, imageUrl }) {
  return (
    <>
    <div className="w-80 h-100 rounded-lg shadow-lg bg-black dark:bg-gray-800 p-0 flex flex-col">
      <Image src={imageUrl} width={400} height={200} className='m-0'/>
      <div className="card-content p-4 text-white">
        <h2 className="text-white">{country}</h2>
        <br />
        <p className="text-white">Population: <span className='text-indigo-200'>{population}</span></p>
        <p className="text-white">Region: <span className='text-indigo-200'>{region}</span></p>
        <p className="text-white">Capital: <span className='text-indigo-200'>{capital}</span></p>
      </div>
    </div>

    <div className="w-80 h-100 rounded-lg shadow-lg bg-black dark:bg-gray-800 p-0 flex flex-col">
      <Image src={imageUrl} width={400} height={200} className='m-0'/>
      <div className="card-content p-4 text-white">
        <h2 className="text-white">{country}</h2>
        <br />
        <p className="text-white">Population: <span className='text-indigo-200'>{population}</span></p>
        <p className="text-white">Region: <span className='text-indigo-200'>{region}</span></p>
        <p className="text-white">Capital: <span className='text-indigo-200'>{capital}</span></p>
      </div>
    </div>

    <div className="w-80 h-100 rounded-lg shadow-lg bg-black dark:bg-gray-800 p-0 flex flex-col">
      <Image src={imageUrl} width={400} height={200} className='m-0'/>
      <div className="card-content p-4 text-white">
        <h2 className="text-white">{country}</h2>
        <br />
        <p className="text-white">Population: <span className='text-indigo-200'>{population}</span></p>
        <p className="text-white">Region: <span className='text-indigo-200'>{region}</span></p>
        <p className="text-white">Capital: <span className='text-indigo-200'>{capital}</span></p>
      </div>
    </div>

    <div className="w-80 h-100 rounded-lg shadow-lg bg-black dark:bg-gray-800 p-0 flex flex-col">
      <Image src={imageUrl} width={400} height={200} className='m-0'/>
      <div className="card-content p-4 text-white">
        <h2 className="text-white">{country}</h2>
        <br />
        <p className="text-white">Population: <span className='text-indigo-200'>{population}</span></p>
        <p className="text-white">Region: <span className='text-indigo-200'>{region}</span></p>
        <p className="text-white">Capital: <span className='text-indigo-200'>{capital}</span></p>
      </div>
    </div>
    </>
  );
}