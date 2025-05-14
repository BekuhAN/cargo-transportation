import { ReactElement } from "react";
import styles from "./service-item.module.scss";
import { Service } from "../../interfaces/service";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

interface Props {
  item: Service;
}

function ServiceItem({ item }: Props): ReactElement {
  return (
    <div className={styles.service_item}>
      <div className={styles.service_item__header}>
        <Link
          to={`/services/${item.id}`}
          className={styles.service_item__title}
        >
          {item.title}
        </Link>
        <div className={styles.service_item__icon}>
          <Icon icon={item.icon} width="48" height="48" />
        </div>
      </div>
      <div className={styles.service_item__content}>
        <div className={styles.service_item__description}>
          {item.description}
        </div>
        <div className={styles.service_item__image}>
          <img src={`../../assets/${item.image}`} />
        </div>
      </div>
    </div>
  );
}

export default ServiceItem;
