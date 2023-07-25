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

  const disabledButtonStyle = {
    transition: "0.2s ease-in-out",
    backgroundColor: "#8F8F8F",
    border: "0.1rem solid #000",
  };

  const buttonStyle = {
    backgroundColor: value === "Stop" ? "#f13f3f" : "black",
  };

  return (
    <button
      ref={ref}
      onClick={handleClick}
      className={`custom-button ${disabled ? "disabled-button" : ""}`}
      disabled={disabled}
      style={disabled ? disabledButtonStyle : buttonStyle}
    >
      {imageSrc ? <img src={imageSrc} alt={value} /> : value}
    </button>
  );
};

export default Button;
