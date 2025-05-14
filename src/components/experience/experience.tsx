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
              <ul className={styles.experience__content__list}>
                <li className={styles.experience__content__list__item}>
                  <Icon
                    icon="material-symbols-light:check-box-rounded"
                    width="24"
                    height="24"
                    className={styles.experience__content__list__icon}
                  />
                  Профессиональная упаковка грузов
                </li>
                <li className={styles.experience__content__list__item}>
                  <Icon
                    icon="material-symbols-light:check-box-rounded"
                    width="24"
                    height="24"
                    className={styles.experience__content__list__icon}
                  />
                  Доставка по всей России и за рубеж
                </li>
                <li className={styles.experience__content__list__item}>
                  <Icon
                    icon="material-symbols-light:check-box-rounded"
                    width="24"
                    height="24"
                    className={styles.experience__content__list__icon}
                  />
                  Гарантия сохранности – нулевые риски
                </li>
                <li className={styles.experience__content__list__item}>
                  <Icon
                    icon="material-symbols-light:check-box-rounded"
                    width="24"
                    height="24"
                    className={styles.experience__content__list__icon}
                  />
                  Соблюдение сроков
                </li>
                <li className={styles.experience__content__list__item}>
                  <Icon
                    icon="material-symbols-light:check-box-rounded"
                    width="24"
                    height="24"
                    className={styles.experience__content__list__icon}
                  />
                  Гибкие тарифы и экономия вашего бюджета
                </li>
                <li className={styles.experience__content__list__item}>
                  <Icon
                    icon="material-symbols-light:check-box-rounded"
                    width="24"
                    height="24"
                    className={styles.experience__content__list__icon}
                  />
                  Оперативная транспортировка
                </li>
              </ul>
            </div>
            <div className={styles.experience__content__column}>
              <div className={styles.experience__content__column__item}>
                <div
                  className={styles.experience__content__column__item__title}
                >
                  <Icon
                    icon="material-symbols-light:arrow-upward-rounded"
                    width="80"
                    height="80"
                  />
                  <motion.pre>{rounded1}</motion.pre>к
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
                    width="80"
                    height="80"
                  />
                  <motion.pre whileInView={{ opacity: 1 }}>
                    {rounded2}
                  </motion.pre>
                  к
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
      <div className={styles.experience__contacts}>
        <div className={styles.experience__contacts__image}></div>
        <div className={styles.experience__contacts__details}>
          <div className={styles.experience__contacts__title}>
            Мы знаем, что каждая перевозка — это важно
          </div>
          <div className={styles.experience__contacts__phone}>
            <div className={styles.experience__contacts__phone__icon}>
              <Icon
                icon="material-symbols-light:phone-in-talk"
                width="40"
                height="40"
              />
            </div>

            <div className={styles.experience__contacts__phone__number}>
              Позвоните нам!
              <a href="tel:+79991113356">+7 (999) 111-33-56</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
