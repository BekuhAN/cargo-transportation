import { ReactElement, useEffect, useState } from "react";

import styles from "./service-page.module.scss";
import PageTitle from "../../components/page-title/page-title";
import { useServices } from "../../data-access/services/use-services";
import { Service } from "../../interfaces/service";
import { useParams } from "react-router-dom";
import clsx from "clsx";

function ServicePage(): ReactElement {
  const services = useServices();
  const params = useParams();
  const [service, setService] = useState<Service>();
  useEffect(() => {
    setService(services.find((item) => item.id.toString() === params.id));
    console.log(services);
  }, [services, params.id]);
  return (
    <main className={styles.service_page}>
      <PageTitle title={service?.title || ""} />
      <div className={clsx(styles.service_page__inner, "container")}>
        <div className={styles.service_page__image}>
          <div className={styles.service_page__image__inner}>
            <img src={`../../assets/${service?.image}`} />
            <h2 className={styles.service_page__title}>{service?.title}</h2>
          </div>
        </div>
        <div
          className={styles.service_page__content}
          dangerouslySetInnerHTML={{ __html: `${service?.content}` }}
        ></div>
      </div>
    </main>
  );
}

export default ServicePage;
