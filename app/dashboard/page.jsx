import Card from "../ui/home/Card";

export default function Page() {
  return (
    <div className="px-5 flex flex-col justify-space-around border border-blue-500 h-full mb-15">
      <div className="flex flex-wrap items-center justify-between">
        <p>Here you can find information about different countries.</p>
        <p>Click on a country card to learn more.</p>
      </div>
      <div className=" flex flex-wrap flex-row items-center justify-between bg-gray-100 dark:bg-gray-900 text-center">
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