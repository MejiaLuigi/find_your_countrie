export default function SelectInput({ options, value, onChange }) {
  return (
    <select value={value} onChange={onChange} className="select-input w-50 h-13 border border-gray-300 rounded-lg  pr-15 bg-white dark:bg-gray-700">
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}