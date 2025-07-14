import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Input({ value, onChange, placeholder, icon }) {
  return (
    <div className="input-container flex items-center w-full max-w-md h-12 border border-gray-300 rounded-lg px-4 bg-white dark:bg-gray-700">
      {icon && (

        <div className="input-icon mr-3"><FontAwesomeIcon icon={icon} className="text-black mx-3" /></div>
      )}

      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="input-field  bg-transparent text-black dark:text-white outline-none "
      />
    </div>
  );
}