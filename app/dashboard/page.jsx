import Card from "../ui/home/Card";

export default function Page() {
  return (
    <div className="m-2 p-20">
      <h1>Dashboard</h1>
      <p>Welcome to the dashboard page!</p>
      <div className="flex items-center justify-between">
        <p>Here you can find information about different countries.</p>
        <p>Click on a country card to learn more.</p>
      </div>
      <div className=" flex flex-row items-center justify-between bg-gray-100 dark:bg-gray-900 text-center">
        <Card
            imageUrl={"/flag-Colombia.jpg"} 
            country={"Colombia"} 
            population={"52.216.000"} 
            region={"Americas"} 
            capital={"Bogotá"}
        />
      </div>
    </div>
  );
}