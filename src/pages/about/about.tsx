import { ReactElement } from "react";
import PageTitle from "../../components/page-title/page-title";
import styles from "./about.module.scss";
import clsx from "clsx";
import Image1 from "../../assets/about-img-1.jpg";
import Image2 from "../../assets/about-img-2.jpg";
import SectionTitle from "../../components/section-title/section-title";
import Team from "../../components/team/team";
import Comments from "../../components/comments/comments";
import Experience from "../../components/experience/experience";
import { Icon } from "@iconify/react/dist/iconify.js";

function About(): ReactElement {
  return (
    <main className={styles.about}>
      <PageTitle title="О нас" />
      <section className={styles.about__info}>
        <div
          className={clsx(
            styles.about__info__inner,
            "container"
          )}
        >
          <div className={styles.about__info__image}>
            <img src={Image1} alt="" />
            <div className={styles.about__info__subimage}>
              <img src={Image2} alt="" />
            </div>
            <div className={styles.about__info__experience}>
              25+ <span>лет опыта</span>
            </div>
          </div>
          <div className={styles.about__info__content}>
            <SectionTitle
              title="Снижаем затраты и повышаем эффективность логистики"
              subtitle="Кто мы"
            />
            <div className={styles.about__info__description}>
              Мы специализируемся на комплексных транспортных решениях,
              обеспечивая надежность и своевременность доставки ваших грузов по
              всей России. Наш опыт позволяет оптимизировать логистические
              процессы и предлагать клиентам выгодные условия.
            </div>
            <div className={styles.about__info__services}>
              <div className={styles.about__info__services__item}>
                <div className={styles.about__info__services__item__icon}>
                  <Icon
                    icon="material-symbols-light:delivery-truck-speed-outline-rounded"
                    width="60"
                    height="60"
                  />
                </div>
                <div className={styles.about__info__services__item__title}>
                  Упаковка и подготовка грузов
                </div>
              </div>
              <div className={styles.about__info__services__item}>
                <div className={styles.about__info__services__item__icon}>
                  <Icon
                    icon="material-symbols-light:package-outline-rounded"
                    width="60"
                    height="60"
                  />
                </div>
                <div className={styles.about__info__services__item__title}>
                  Сертифицированные перевозки
                </div>
              </div>
            </div>
            <ul className={styles.about__info__choose}>
              <li className={styles.about__info__choose__item}>
                <div className={styles.about__info__choose__icon}>
                  <Icon
                    icon="material-symbols-light:check-small-rounded"
                    width="30"
                    height="30"
                  />
                </div>
                Более 25 лет опыта в организации грузоперевозок
              </li>
              <li className={styles.about__info__choose__item}>
                <div className={styles.about__info__choose__icon}>
                  <Icon
                    icon="material-symbols-light:check-small-rounded"
                    width="30"
                    height="30"
                  />
                </div>
                Индивидуальный подход к каждому клиенту
              </li>
              <li className={styles.about__info__choose__item}>
                <div className={styles.about__info__choose__icon}>
                  <Icon
                    icon="material-symbols-light:check-small-rounded"
                    width="30"
                    height="30"
                  />
                </div>
                Современный автопарк и складские помещения
              </li>
              <li className={styles.about__info__choose__item}>
                <div className={styles.about__info__choose__icon}>
                  <Icon
                    icon="material-symbols-light:check-small-rounded"
                    width="30"
                    height="30"
                  />
                </div>
                Страхование грузов и отслеживание в реальном времени
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Experience />
      <Team />
      <Comments />
    </main>
  );
}

export default About;
