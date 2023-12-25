import s from "./Footer.module.scss";
import Address from "./Address";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className={s.footer}>
      <Address />
      <Link to="https://appurl.io/C4gLHU_hNe" className={s.footer_text}>
        м. Бориспіль вул. Київський шлях. 95
      </Link>
    </footer>
  );
};

export default Footer;
