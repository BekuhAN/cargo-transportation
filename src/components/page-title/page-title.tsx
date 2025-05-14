import { ReactElement } from "react";
import styles from "./page-title.module.scss";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

interface Props {
  title: string;
}

function PageTitle({ title }: Props): ReactElement {
  return (
    <section className={styles.page_title}>
      <div className="container">
        <h1 className={styles.page_title__title}>{title}</h1>
        <div className={styles.page_title__breadcrumbs}>
          <Link to="/">Главная</Link>
          <Icon
            icon="material-symbols-light:keyboard-arrow-right"
            width="24"
            height="24"
          />
          <span className={styles.page_title__breadcrumbs__item}>{title}</span>
        </div>
      </div>
    </section>
  );
}

export default PageTitle;
