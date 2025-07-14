import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Input({ value, onChange, placeholder, icon }) {
  return (
    <div className="input-container flex items-center border w-[500px] max-w-md h-13 border-gray-300 rounded-lg p-2 bg-white dark:bg-gray-700 pl-5 max-width-screen-md">
      {icon && (

        <div className="input-icon mr-3"><FontAwesomeIcon icon={icon} className="text-black mx-3" /></div>
      )}

      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="input-field w-full h-full bg-transparent text-black dark:text-white outline-none"
      />
    </div>
  );
}