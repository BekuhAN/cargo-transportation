import { ReactElement } from "react";
import styles from "./header.module.scss";
import { useNavigation } from "../../data-access/navigation/use-navigation";
import { Link } from "react-router-dom";
import { Button } from "@heroui/react";
import clsx from "clsx";

function Header(): ReactElement {
  const navList = useNavigation();

  return (
    <header className={styles.header}>
      <div className={clsx("container", styles.header__inner)}>
        <div className={styles.header__logo}>ТрансЛогистик</div>
        <nav className={styles.header__nav}>
          <ul className={styles.header__nav__list}>
            {navList.length > 0 &&
              navList.map((item) => (
                <li className={styles.header__nav__item} key={item.id}>
                  <Link className={styles.header__nav__link} to={item.path}>
                    {item.title}
                  </Link>
                </li>
              ))}
          </ul>
        </nav>
        <Button color="primary" radius="full">
          Получить консультацию
        </Button>
      </div>
    </header>
  );
}

export default Header;
