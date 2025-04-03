import { ReactElement } from "react";
import styles from "./service-list.module.scss";
import SectionTitle from "../section-title/section-title";

function ServiceList(): ReactElement {
  return (
    <section className={styles.service_list}>
      <div className={styles.service_list__title}>
        <SectionTitle
          title="Современные подходы и технологии в грузоперевозках"
          subtitle="Наши услуги"
          light={true}
        />
      </div>
    </section>
  );
}

export default ServiceList;
