import { Link } from "react-router-dom";
import s from "./social.module.scss";
const Social = () => {
  return (
    <div className={s.social}>
      <Link
        className={s.social_link}
        to="https://www.facebook.com/svetlanatatianchenko"
      >
        facebook
      </Link>
      <Link
        className={s.social_link}
        to="https://www.instagram.com/lum_photostudio/"
      >
        instagram
      </Link>
    </div>
  );
};

export default Social;
