export default function Card({ country, population, region, capital, imageUrl }) {
  return (
    <div className="card">
      <img src={imageUrl} alt={country} className="card-image" />
      <h2 className="card-title">{country}</h2>
      <br />
      <p className="card-description">{population}</p>
      <p className="card-description">{region}</p>
      <p className="card-description">{capital}</p>
    </div>
  );
}