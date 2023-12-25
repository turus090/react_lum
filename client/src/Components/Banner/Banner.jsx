import Btn from "../Btn/Btn";
import Social from "../Social/Social";
import s from "./banner.module.scss";
import bannerImg from "./img/banner.jpg";
import Logo from "./Logo";
const Banner = () => {
  return (
    <main className={s.banner}>
      <Social />
      <div className={s.banner_wrapper}>
        <div className={s.banner_up}>
          <Logo className={s.banner_up_logo} />
          <h1 className={s.banner_up_title}>
            Merry <span>Christmas</span>
          </h1>
        </div>

        <img className={s.banner_wrapper_bg} src={bannerImg} alt="baground" />
      </div>
      <p className={s.banner_text}>Різдвяна фотосесія</p>

      <div className={s.banner_btns}>
        <Btn
          theme="green"
          text="ЗАПИСАТИСЯ"
          link="https://t.me/svit_photo_lum"
        />
        <Btn
          theme="light"
          text="БІЛЬШЕ"
          link="https://www.instagram.com/stories/highlights/17992338914432799/"
        />
      </div>
    </main>
  );
};

export default Banner;
