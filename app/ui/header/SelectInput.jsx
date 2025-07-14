export default function SelectInput({ options, value, onChange }) {
  return (
    <select value={value} onChange={onChange} className="select-input w-full max-w-[200px] h-12 border border-gray-300 rounded-lg px-4 bg-white dark:bg-gray-700 text-black dark:text-white">
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}