import styles from "./preview.module.scss";
import { ReactElement, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Preview1 from "../../assets/preview-1.webp";
import Preview2 from "../../assets/preview-2.webp";
import Preview3 from "../../assets/preview-3.webp";
import { motion } from "motion/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import clsx from "clsx";

function Preview(): ReactElement {
  const containerRef1 = useRef<HTMLDivElement>(null);
  const containerRef2 = useRef<HTMLDivElement>(null);
  const containerRef3 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.fonts.ready.then(() => {
      if (!containerRef1.current) return;
      containerRef1.current.style.visibility = "visible";
      if (!containerRef2.current) return;
      containerRef2.current.style.visibility = "visible";
      if (!containerRef3.current) return;
      containerRef3.current.style.visibility = "visible";
    });
  }, []);

  return (
    <section className={styles.preview}>
      <Swiper
        effect={"fade"}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className={styles.preview__slide}>
            <img src={Preview1} />
            <div
              className={clsx(styles.preview__slide__content)}
              ref={containerRef1}
            >
              <motion.div
                animate={{ scale: 1 }}
                whileInView={{
                  scale: 1,
                  opacity: [0, 1],
                  y: [50, 0],
                }}
                transition={{ duration: 0.5 }}
              >
                <div className={styles.preview__slide__content__subtitle}>
                  Грузоперевозки
                </div>
              </motion.div>
              <h1
                className={clsx(
                  styles.preview__slide__content__title,
                  "preview_animate"
                )}
              >
                <motion.div
                  animate={{ scale: 1 }}
                  whileInView={{
                    scale: 1,
                    opacity: [0, 1],
                    x: [0, 50],
                  }}
                  transition={{ duration: 0.5 }}
                >
                  Воздушные перевозки: <br /> взлетает на новые высоты
                </motion.div>
              </h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.preview__slide}>
            <img src={Preview2} />{" "}
            <div
              className={clsx(styles.preview__slide__content)}
              ref={containerRef2}
            >
              <motion.div
                animate={{ scale: 1 }}
                whileInView={{
                  scale: 1,
                  opacity: [0, 1],
                  y: [50, 0],
                }}
                transition={{ duration: 0.5 }}
              >
                <div className={styles.preview__slide__content__subtitle}>
                  Грузоперевозки
                </div>
              </motion.div>
              <h1
                className={clsx(
                  styles.preview__slide__content__title,
                  "preview_animate"
                )}
              >
                <motion.div
                  animate={{ scale: 1 }}
                  whileInView={{
                    scale: 1,
                    opacity: [0, 1],
                    x: [0, 50],
                  }}
                  transition={{ duration: 0.5 }}
                >
                  Перевозка большегрузов: <br /> максимизация пропускной
                  способности
                </motion.div>
              </h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.preview__slide}>
            <img src={Preview3} />{" "}
            <div
              className={clsx(styles.preview__slide__content)}
              ref={containerRef3}
            >
              <motion.div
                animate={{ scale: 1 }}
                whileInView={{
                  scale: 1,
                  opacity: [0, 1],
                  y: [50, 0],
                }}
                transition={{ duration: 0.5 }}
              >
                <div className={styles.preview__slide__content__subtitle}>
                  Грузоперевозки
                </div>
              </motion.div>
              <h1
                className={clsx(
                  styles.preview__slide__content__title,
                  "preview_animate"
                )}
              >
                <motion.div
                  animate={{ scale: 1 }}
                  whileInView={{
                    scale: 1,
                    opacity: [0, 1],
                    x: [0, 50],
                  }}
                  transition={{ duration: 0.5 }}
                >
                  Совершенство логистики: <br /> за пределами границ
                </motion.div>
              </h1>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Preview;
