import classNames from "classnames";
import s from "./btn.module.scss";
const Btn = ({ theme, text, link }) => {
  const handleClick = () => {
    window.location.href = link;
  };
  const btnStyle = classNames(
    s.btn,
    theme === "green" ? s.theme_green : s.theme_light
  );
  return (
    <button onClick={handleClick} className={btnStyle}>
      {text}
    </button>
  );
};

export default Btn;
