import { useRef } from "react";
import clickSound from "../assets/audio/regulate-sound.mp3";
import "./Button.css";

const Button = ({ value, onClick, disabled, imageSrc }) => {
  const ref = useRef(null);
  const handleClick = () => {
    ref.current.style.boxShadow = "2px 2px 0 0 #000";
    setTimeout(() => {
      ref.current.style.boxShadow = "4px 4px 0 0 #000";
    }, 100);

    new Audio(clickSound).play();
    switch (value) {
      case "Start" || "Reset":
        onClick();
        break;
      default:
        onClick();
    }
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
