import { ReactElement } from "react";
import styles from "./footer.module.scss";
import clsx from "clsx";
import { useNavigation } from "../../data-access/navigation/use-navigation";
import { Link } from "react-router-dom";
import LogoImage from "../../assets/logo-white.png";
import { Icon } from "@iconify/react";

function Footer(): ReactElement {
  const navList = useNavigation();

  return (
    <footer className={styles.footer}>
      <div className={clsx(styles.footer__inner, "container")}>
        <div className={styles.footer__social}>
          <Link to="/">
            <img className={styles.footer__logo} src={LogoImage} alt="" />
          </Link>
          <div className={styles.footer__social__list}>
            <a
              target="_blank"
              href="https://telegram.org/"
              className={styles.footer__social__item}
            >
              <Icon icon="fa-brands:telegram-plane" width="24" height="24" />
            </a>
            <a
              target="_blank"
              href="https://vk.com/"
              className={styles.footer__social__item}
            >
              <Icon icon="fa-brands:vk" width="24" height="24" />
            </a>
            <a
              target="_blank"
              href="https://ok.ru/"
              className={styles.footer__social__item}
            >
              <Icon icon="fa-brands:odnoklassniki" width="24" height="24" />
            </a>
          </div>
        </div>
        <div className={styles.footer__contacts}>
          <div className={styles.footer__title}>Контакты</div>
          <div className={styles.footer__contacts__item}>
            <Icon
              icon="material-symbols-light:location-on-outline-rounded"
              width="24"
              height="24"
            />
            г. Краснодар, Цветочная улица, 31
          </div>
          <div className={styles.footer__contacts__item}>
            <Icon
              icon="material-symbols-light:alternate-email-rounded"
              width="24"
              height="24"
            />
            <a href="mailto:info@translogistics.ru">info@translogistics.ru</a>
          </div>
          <div className={styles.footer__contacts__item}>
            <Icon
              icon="material-symbols-light:phone-android-outline-rounded"
              width="24"
              height="24"
            />
            <a href="tel:+79003332211">+7 (900) 333-22-11</a>
          </div>
        </div>
        <nav className={styles.footer__nav}>
          <div className={styles.footer__title}>Навигация</div>
          <ul className={styles.footer__nav__list}>
            {navList.length > 0 &&
              navList
                .filter((item) => item.title !== "Услуги")
                .map((item) => (
                  <li className={styles.footer__nav__item} key={item.id}>
                    <Link className={styles.footer__nav__link} to={item.path}>
                      {item.title}
                    </Link>
                  </li>
                ))}
          </ul>
        </nav>
      </div>
      <div className={clsx(styles.footer__copyright, "container")}>
        Copyright © 2025
      </div>
    </footer>
  );
}

export default Footer;
