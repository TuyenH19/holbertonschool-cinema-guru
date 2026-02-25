import './general.css';

function Input({ label, type, className, value, setValue, icon, inputAttributes = {} }) {
  const handleInput = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className={`input-container ${className || ''}`}>
      {label && (
        <label>
          {icon && <span className="input-icon">{icon}</span>}
          {label}
        </label>
      )}
      <div className="input-wrapper">
        <input
          type={type}
          value={value}
          onChange={handleInput}
          {...inputAttributes}
        />
      </div>
    </div>
  );
}

export default Input;
