import Input from "../ui/header/Input";
import SelectInput from "../ui/header/SelectInput";
import Card from "../ui/home/Card";

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"; 

export default function Page() {
  const options = [
    { value: 'Filter by Region', label: 'Filter by Region' },
    { value: 'africa', label: 'Africa' },
    { value: 'americas', label: 'Americas' },
    { value: 'asia', label: 'Asia' },
    { value: 'europe', label: 'Europe' },
    { value: 'oceania', label: 'Oceania' }
  ];
  return (
    <div className="px-5 flex flex-col justify-space-around border border-blue-500 h-full">
      <div className="flex flex-wrap items-center justify-between md:items-center md:justify-between mb-10">
        <div className="mb-5 md:mb-0">
          <Input placeholder="Search for a country..." icon={faMagnifyingGlass}/>
        </div>
        <div>
          <SelectInput options={options}/>
        </div>
      </div>
      <div className=" flex flex-wrap flex-row items-center justify-between bg-gray-100 dark:bg-gray-900 text-center md: flex justify-center items-center">
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