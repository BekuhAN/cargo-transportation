import { ReactElement, useEffect } from "react";
import styles from "./experience.module.scss";
import SectionTitle from "../section-title/section-title";
import { animate, motion, useMotionValue, useTransform } from "motion/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import ExperienceImage from "../../assets/experience-bg.webp";

function Experience(): ReactElement {
  const count1 = useMotionValue(0);
  const rounded1 = useTransform(() => Math.round(count1.get()));
  const count2 = useMotionValue(0);
  const rounded2 = useTransform(() => Math.round(count2.get()));

  useEffect(() => {
    const controls = animate(count1, 150, { duration: 3 });
    return () => controls.stop();
  }, []);
  useEffect(() => {
    const controls = animate(count2, 250, { duration: 3 });
    return () => controls.stop();
  }, []);
  return (
    <section className={styles.experience}>
      <div className={styles.experience__inner}>
        <img
          className={styles.experience__image}
          src={ExperienceImage}
          alt=""
        />
        <div className="container">
          <div className={styles.experience__content}>
            <div className={styles.experience__content__column}>
              <SectionTitle
                title="Лидер в сфере грузоперевозок и логистических решений"
                subtitle="Наш опыт"
                light={true}
              />
            </div>
            <div className={styles.experience__content__column}>
              <div className={styles.experience__content__column__item}>
                <div
                  className={styles.experience__content__column__item__title}
                >
                  <Icon
                    icon="material-symbols-light:arrow-upward-rounded"
                    width="24"
                    height="24"
                  />
                  <motion.pre>{rounded1}</motion.pre> тыс.
                </div>

                <div
                  className={
                    styles.experience__content__column__item__description
                  }
                >
                  Клиентов доверяют нам свои грузоперевозки
                </div>
              </div>
              <div className={styles.experience__content__column__item}>
                <div
                  className={styles.experience__content__column__item__title}
                >
                  <Icon
                    icon="material-symbols-light:arrow-upward-rounded"
                    width="24"
                    height="24"
                  />
                  <motion.pre whileInView={{ opacity: 1 }}>
                    {rounded2}
                  </motion.pre>{" "}
                  тыс.
                </div>

                <div
                  className={
                    styles.experience__content__column__item__description
                  }
                >
                  Успешно выполненных заказов для транспортных и логистических
                  компаний
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
