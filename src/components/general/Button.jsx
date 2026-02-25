import './general.css';

function Button({label, className, onClick, icon, type='button'}) {
  return (
    <button type={type} className={className || ''} onClick={onClick}>
      {icon && <span className="button-icon">{icon}</span>}
      {label}
    </button>
  );
}

export default Button;
