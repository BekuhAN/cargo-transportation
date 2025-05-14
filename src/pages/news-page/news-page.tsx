import { ReactElement, useEffect, useState } from "react";
import PageTitle from "../../components/page-title/page-title";
import { useNews } from "../../data-access/news/use-news";
import { Link, useParams } from "react-router-dom";
import { NewsItem } from "../../interfaces/news-item";
import styles from "./news-page.module.scss";
import clsx from "clsx";
import SectionTitle from "../../components/section-title/section-title";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Icon } from "@iconify/react/dist/iconify.js";

function NewsPage(): ReactElement {
  const news = useNews();
  const params = useParams();
  const [currentNews, setCurrentNews] = useState<NewsItem>();
  useEffect(() => {
    setCurrentNews(news.find((item) => item.id.toString() === params.id));
  }, [news, params.id]);

  return (
    <main className={styles.news_page}>
      <PageTitle title={currentNews?.title || ""} />
      <div className={clsx(styles.news_page__inner, "container")}>
        <div className={styles.news_page__image}>
          <div className={styles.news_page__image__inner}>
            <div className={styles.news_page__info}>
              <div className={styles.news_page__more__item__category}>{currentNews?.category}</div>
              <div className={styles.news_page__more__item__date}>{currentNews?.date}</div>
            </div>
            <img src={`../../assets/${currentNews?.image}`} />
            <h2 className={styles.news_page__title}>{currentNews?.title}</h2>
          </div>
        </div>
        <div
          className={styles.news_page__content}
          dangerouslySetInnerHTML={{ __html: `${currentNews?.content}` }}
        ></div>
      </div>
      <section className={styles.news_page__more}>
        <div className="container">
          <SectionTitle
            title="Другие новости в сфере грузоперевозок"
            subtitle="Наши новости"
          />
          <div className={styles.news_page__more__list}>
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
              {news.length > 0 &&
                news
                  .filter((item) => item.id !== currentNews?.id)
                  .map((item) => (
                    <SwiperSlide>
                      <div className={styles.news_page__more__item}>
                        <div className={styles.news_page__more__item__header}>
                          <div
                            className={styles.news_page__more__item__category}
                          >
                            {item.category}
                          </div>
                          <div className={styles.news_page__more__item__date}>
                            {item.date}
                          </div>
                        </div>
                        <div className={styles.news_page__more__item__image}>
                          <img src={`../../assets/${item.image}`} />
                        </div>
                        <div className={styles.news_page__more__item__title}>
                          {item.title}
                        </div>
                        <Link
                          to={`/news/${item.id}`}
                          className={styles.news_page__more__item__link}
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
    </main>
  );
}

export default NewsPage;
