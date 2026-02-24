import './general.css';

function SelectInput({ label, options, className, value, setValue }) {
  const handleSelect = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className={`select-container ${className || ''}`}>
      {label && <label>{label}</label>}
      <select value={value} onChange={handleSelect}>
        {options.map((option, index) => (
          <option key={index} value={option.value || option}>
            {option.label || option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectInput;
