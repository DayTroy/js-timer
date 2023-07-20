import { useRef } from "react";

const Button = ({ value, onClick, disabled, imageSrc }) => {
  const ref = useRef(null);
  const handleClick = () => {
    ref.current.style.boxShadow = "2px 2px 0 0 #000";
    setTimeout(() => {
      ref.current.style.boxShadow = "4px 4px 0 0 #000";
    }, 100);
    if (value == "Reset") {
      onClick();
      return;
    }
    if (value == "Start") {
      onClick();
      return;
    }
    onClick();
  };
  return (
    <button
      ref={ref}
      onClick={handleClick}
      className={`custom-button ${disabled ? "disabled-button" : ""}`}
      disabled={disabled}
    >
      {imageSrc ? <img src={imageSrc} alt={value} /> : value}
    </button>
  );
};

export default Button;
