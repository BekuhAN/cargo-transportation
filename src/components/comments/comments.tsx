import { ReactElement } from "react";
import ReactCurvedText from "react-curved-text";
import styles from "./comments.module.scss";
import { Icon } from "@iconify/react";
import clsx from "clsx";
import { useComments } from "../../data-access/comments/use-comments";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

function Comments(): ReactElement {
  const commentsList = useComments();

  return (
    <section className={styles.comments}>
      <div className={clsx("container", styles.comments__inner)}>
        <div className={styles.comments__title}>
          <div className={styles.comments__title__quote}>
            <Icon
              icon="material-symbols-light:format-quote-rounded"
              width="90"
              height="90"
            />
          </div>
          <ReactCurvedText
            width={300}
            height={300}
            cx={150}
            cy={150}
            rx={100}
            ry={100}
            startOffset={0}
            reversed={false}
            text="ДОВЕРИЕ КЛИЕНТОВ - ОТЗЫВЫ КЛИЕНТОВ -"
            textProps={{ style: { fontSize: 24, color: "#00112e" } }}
            textPathProps={null}
            tspanProps={null}
            ellipseProps={null}
            svgProps={{ className: styles.rotating_curved_text }}
          />
        </div>
        <div className={styles.comments__list}>
          <Swiper
            className="mySwiper"
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
          >
            {commentsList.length > 0 &&
              commentsList.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className={styles.comments__item}>
                    <div className={styles.comments__item__text}>
                      {item.text}
                    </div>
                    <div className={styles.comments__item__author}>
                      <div className={styles.comments__item__author__image}>
                        <img src={`../../assets/${item.image}`} alt="" />
                      </div>
                      <div className={styles.comments__item__author__name}>
                        {item.name}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Comments;
