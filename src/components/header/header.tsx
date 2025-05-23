import { ReactElement } from "react";
import styles from "./header.module.scss";
import { useNavigation } from "../../data-access/navigation/use-navigation";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@heroui/react";
import clsx from "clsx";
import Logo from "../../assets/logo-white.png";
import { Icon } from "@iconify/react";
import { useServices } from "../../data-access/services/use-services";

function Header(): ReactElement {
  const navList = useNavigation();
  const servicesList = useServices();
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <div className={clsx(styles.header__inner)}>
        <Link to="/" className={styles.header__logo}>
          <img src={Logo} />
        </Link>
        <nav className={styles.header__nav}>
          <ul className={styles.header__nav__list}>
            {navList.length > 0 &&
              navList.map((item) => (
                <li className={styles.header__nav__item} key={item.id}>
                  <Link className={styles.header__nav__link} to={item.path}>
                    {item.title}
                  </Link>
                  {item.title === "Услуги" && (
                    <ul className={clsx(styles.header__nav__sublist)}>
                      {servicesList.length > 0 &&
                        servicesList.map((service) => (
                          <li
                            className={styles.header__nav__subitem}
                            key={service.id}
                          >
                            <Link
                              className={styles.header__nav__sublink}
                              to={`/services/${service.id}`}
                            >
                              {service.title}
                            </Link>
                          </li>
                        ))}
                    </ul>
                  )}
                </li>
              ))}
          </ul>
        </nav>
        <Button
          className={styles.header__btn}
          color="primary"
          endContent={
            <Icon
              icon="material-symbols-light:arrow-outward"
              width="24"
              height="24"
              className={styles.header__btn__icon}
            />
          }
          radius="full"
          onClick={() => navigate("/contacts")}
        >
          Получить консультацию
        </Button>
      </div>
    </header>
  );
}

export default Header;
