import { ReactElement } from "react";
import styles from "./news.module.scss";
import SectionTitle from "../section-title/section-title";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay } from "swiper/modules";
import { useNews } from "../../data-access/news/use-news";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

function News(): ReactElement {
  const newsList = useNews();
  return (
    <section className={styles.news}>
      <div className="container">
        <SectionTitle
          title="Последнии новости в сфере грузоперевозок"
          subtitle="Наши новости"
        />
        <div className={styles.news__list}>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            {newsList.length > 0 &&
              newsList.map((item) => (
                <SwiperSlide>
                  <div className={styles.news__item}>
                    <div className={styles.news__item__header}>
                      <div className={styles.news__item__category}>
                        {item.category}
                      </div>
                      <div className={styles.news__item__date}>{item.date}</div>
                    </div>
                    <div className={styles.news__item__image}>
                      <img src={`../../assets/${item.image}`} />
                    </div>
                    <div className={styles.news__item__title}>{item.title}</div>
                    <Link
                      to={`/news/${item.id}`}
                      className={styles.news__item__link}
                    >
                      Подробнее{" "}
                      <Icon
                        icon="material-symbols-light:arrow-right-alt-rounded"
                        width="24"
                        height="24"
                      />
                    </Link>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default News;
