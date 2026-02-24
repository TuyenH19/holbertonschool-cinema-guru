import './general.css';

function Button({label, className, onClick, icon}) {
  return (
    <button className = {className || ''} onClick={onClick}>
      {icon && <span className="button-icon">{icon}</span>}
      {label}
    </button>
  );
}

export default Button;
