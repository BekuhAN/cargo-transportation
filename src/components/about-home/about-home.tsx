import { ReactElement, useEffect } from "react";
import styles from "./about-home.module.scss";
import SectionTitle from "../section-title/section-title";
import AboutImg from "../../assets/about-img.jpg";
import { animate, motion, useMotionValue, useTransform } from "motion/react";
import { Icon } from "@iconify/react";
import { Button } from "@heroui/react";
import { useNavigate } from "react-router-dom";

function AboutHome(): ReactElement {
  const count = useMotionValue(0);
  const rounded = useTransform(() => Math.round(count.get()));
  const navigate = useNavigate();

  useEffect(() => {
    const controls = animate(count, 250, { duration: 3 });
    return () => controls.stop();
  }, []);

  return (
    <section className={styles.about_home}>
      <div className="container">
        <SectionTitle
          title="Мы являемся ведущим поставщиком комплексных логистических услуг, помогающим доставить ваш груз в точное место назначения вовремя, без задержек и повреждений."
          subtitle="О компании"
          column={true}
        />
        <div className={styles.about_home__content}>
          <div className={styles.about_home__content__image}>
            <img src={AboutImg} />
          </div>
          <div className={styles.about_home__content__counter}>
            <div className={styles.about_home__content__counter__title}>
              Поставка для лидеров отрасли
            </div>
            <div className={styles.about_home__content__counter__inner}>
              <div className={styles.about_home__content__counter__number}>
                <motion.pre>{rounded}</motion.pre>+
              </div>
              <div className={styles.about_home__content__counter__subtitle}>
                Грузов доставлено <br /> в месяц
              </div>
            </div>
          </div>
          <div className={styles.about_home__content__text}>
            <p>
              Наша компания — надёжный партнёр в сфере грузоперевозок. Мы
              предлагаем профессиональные услуги по доставке грузов любой
              сложности и габаритов.
            </p>
            <ul className={styles.about_home__content__text__list}>
              <li>
                <Icon
                  icon="material-symbols-light:check-small"
                  width="48"
                  height="48"
                />{" "}
                высокий уровень сервиса
              </li>
              <li>
                <Icon
                  icon="material-symbols-light:check-small"
                  width="48"
                  height="48"
                />{" "}
                индивидуальный подход к каждому клиенту
              </li>
              <li>
                <Icon
                  icon="material-symbols-light:check-small"
                  width="48"
                  height="48"
                />{" "}
                соблюдение сроков доставки
              </li>
            </ul>

            <Button
              className={styles.about_home__content__text__btn}
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
              variant="bordered"
              onClick={() => navigate("/contacts")}
            >
              Подробнее о нас
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutHome;
