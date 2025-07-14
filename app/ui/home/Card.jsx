import Image from 'next/image'

export default function Card({ country, population, region, capital, imageUrl }) {
  return (
    <>
    <div className="w-70 h-90 rounded-lg shadow-lg bg-black dark:bg-gray-800 flex flex-col m-2">
      <Image src={imageUrl} width={400} height={200} className='m-0' alt={country}/>
      <div className="card-content p-4 text-white flex flex-col justify-between items-start p-5 ">
        <h2 className="text-white">{country}</h2>
        <br />
        <p className="text-white">Population: <span className='text-indigo-200'>{population}</span></p>
        <p className="text-white">Region: <span className='text-indigo-200'>{region}</span></p>
        <p className="text-white">Capital: <span className='text-indigo-200'>{capital}</span></p>
      </div>
    </div>

    <div className="w-70 h-90 rounded-lg shadow-lg bg-black dark:bg-gray-800  flex flex-col m-2">
      <Image src={imageUrl} width={400} height={200} className='m-0' alt={country}/>
      <div className="card-content p-4 text-white flex flex-col justify-between items-start p-5">
        <h2 className="text-white">{country}</h2>
        <br />
        <p className="text-white">Population: <span className='text-indigo-200'>{population}</span></p>
        <p className="text-white">Region: <span className='text-indigo-200'>{region}</span></p>
        <p className="text-white">Capital: <span className='text-indigo-200'>{capital}</span></p>
      </div>
    </div>

    <div className="w-70 h-90 rounded-lg shadow-lg bg-black dark:bg-gray-800  flex flex-col m-2">
      <Image src={imageUrl} width={400} height={200} className='m-0' alt={country}/>
      <div className="card-content p-4 text-white flex flex-col justify-between items-start p-5">
        <h2 className="text-white">{country}</h2>
        <br />
        <p className="text-white">Population: <span className='text-indigo-200'>{population}</span></p>
        <p className="text-white">Region: <span className='text-indigo-200'>{region}</span></p>
        <p className="text-white">Capital: <span className='text-indigo-200'>{capital}</span></p>
      </div>
    </div>

    <div className="w-70 h-90 rounded-lg shadow-lg bg-black dark:bg-gray-800  flex flex-col m-2">
      <Image src={imageUrl} width={400} height={200} className='m-0' alt={country}/>
      <div className="card-content p-4 text-white flex flex-col justify-between items-start p-5">
        <h2 className="text-white">{country}</h2>
        <br />
        <p className="text-white">Population: <span className='text-indigo-200'>{population}</span></p>
        <p className="text-white">Region: <span className='text-indigo-200'>{region}</span></p>
        <p className="text-white">Capital: <span className='text-indigo-200'>{capital}</span></p>
      </div>
    </div>
    <div className="w-70 h-90 rounded-lg shadow-lg bg-black dark:bg-gray-800  flex flex-col m-2">
      <Image src={imageUrl} width={400} height={200} className='m-0' alt={country}/>
      <div className="card-content p-4 text-white flex flex-col justify-between items-start p-5">
        <h2 className="text-white">{country}</h2>
        <br />
        <p className="text-white">Population: <span className='text-indigo-200'>{population}</span></p>
        <p className="text-white">Region: <span className='text-indigo-200'>{region}</span></p>
        <p className="text-white">Capital: <span className='text-indigo-200'>{capital}</span></p>
      </div>
    </div>
    <div className="w-70 h-90 rounded-lg shadow-lg bg-black dark:bg-gray-800  flex flex-col m-2">
      <Image src={imageUrl} width={400} height={200} className='m-0' alt={country}/>
      <div className="card-content p-4 text-white flex flex-col justify-between items-start p-5">
        <h2 className="text-white">{country}</h2>
        <br />
        <p className="text-white">Population: <span className='text-indigo-200'>{population}</span></p>
        <p className="text-white">Region: <span className='text-indigo-200'>{region}</span></p>
        <p className="text-white">Capital: <span className='text-indigo-200'>{capital}</span></p>
      </div>
    </div>
    <div className="w-70 h-90 rounded-lg shadow-lg bg-black dark:bg-gray-800  flex flex-col m-2">
      <Image src={imageUrl} width={400} height={200} className='m-0' alt={country}/>
      <div className="card-content p-4 text-white flex flex-col justify-between items-start p-5">
        <h2 className="text-white">{country}</h2>
        <br />
        <p className="text-white">Population: <span className='text-indigo-200'>{population}</span></p>
        <p className="text-white">Region: <span className='text-indigo-200'>{region}</span></p>
        <p className="text-white">Capital: <span className='text-indigo-200'>{capital}</span></p>
      </div>
    </div>
    <div className="w-70 h-90 rounded-lg shadow-lg bg-black dark:bg-gray-800  flex flex-col m-2">
      <Image src={imageUrl} width={400} height={200} className='m-0' alt={country}/>
      <div className="card-content p-4 text-white flex flex-col justify-between items-start p-5">
        <h2 className="text-white">{country}</h2>
        <br />
        <p className="text-white">Population: <span className='text-indigo-200'>{population}</span></p>
        <p className="text-white">Region: <span className='text-indigo-200'>{region}</span></p>
        <p className="text-white">Capital: <span className='text-indigo-200'>{capital}</span></p>
      </div>
    </div>
    <div className="w-70 h-90 rounded-lg shadow-lg bg-black dark:bg-gray-800  flex flex-col m-2">
      <Image src={imageUrl} width={400} height={200} className='m-0' alt={country}/>
      <div className="card-content p-4 text-white flex flex-col justify-between items-start p-5">
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