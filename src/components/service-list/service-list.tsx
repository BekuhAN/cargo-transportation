import { ReactElement } from "react";
import styles from "./service-list.module.scss";
import SectionTitle from "../section-title/section-title";
import { useServices } from "../../data-access/services/use-services";
import ServiceItem from "../service-item/service-item";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay } from "swiper/modules";

function ServiceList(): ReactElement {
  const servicesList = useServices();
  return (
    <section className={styles.service_list}>
      <div className={styles.service_list__title}>
        <SectionTitle
          title="Современные подходы и технологии в грузоперевозках"
          subtitle="Наши услуги"
          light={true}
        />
      </div>
      <div className={styles.service_list__inner}>
        <Swiper
          slidesPerView={4}
          spaceBetween={50}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {servicesList.length > 0 &&
            servicesList.map((item) => (
              <SwiperSlide>
                <ServiceItem item={item} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
}

export default ServiceList;
