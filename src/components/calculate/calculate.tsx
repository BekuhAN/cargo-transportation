import { ReactElement } from "react";
import styles from "./calculate.module.scss";
import SectionTitle from "../section-title/section-title";
import CalculateImage from "../../assets/calculate-bg.webp";
import CalculateForm from "../calculate-form/calculate-form";
function Calculate(): ReactElement {
  return (
    <section className={styles.calculate}>
      <div className={styles.calculate__image}>
        <img src={CalculateImage} />
      </div>
      <div className={styles.calculate__content}>
        <div className={styles.calculate__title}>
          <SectionTitle
            title="Получите бесплатную оценку!"
            subtitle="Чего ожидать"
            light={true}
          />
        </div>
        <CalculateForm />
      </div>
    </section>
  );
}

export default Calculate;
