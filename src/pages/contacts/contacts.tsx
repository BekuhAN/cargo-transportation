import { addToast, Button, Input, Textarea } from "@heroui/react";
import { FormEvent, ReactElement, useRef } from "react";
import PageTitle from "../../components/page-title/page-title";
import styles from "./contacts.module.scss";
import { Icon } from "@iconify/react/dist/iconify.js";
import SectionTitle from "../../components/section-title/section-title";
import emailjs from "@emailjs/browser";
import clsx from "clsx";

function Contacts(): ReactElement {
  const formRef = useRef<HTMLFormElement | null>(null);
  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    // famhur@plbks.com
    emailjs
      .sendForm("service_jcf71y2", "template_zfknjhm", formRef.current || "", {
        publicKey: "J8LepyS_gWgM54Myu",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          formRef.current?.reset();
          addToast({
            title: "Успех!",
            description: "Сообщение успешно отправлено!",
            timeout: 3000,
            color: "success",
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
          addToast({
            title: "Ошибка...",
            description: error.text,
            timeout: 3000,
            color: "danger",
          });
        }
      );
  };

  return (
    <main className={styles.contacts}>
      <PageTitle title="Контакты" />
      <div className="container">
        <div className={styles.contacts__details}>
          <div className={styles.contacts__details__item}>
            <div className={styles.contacts__details__item__arrow}>
              <Icon
                icon="material-symbols-light:arrow-insert"
                width="24"
                height="24"
              />
            </div>
            <div className={styles.contacts__details__item__title}>
              Электронная почка
            </div>
            <div className={styles.contacts__details__item__description}>
              <a href="mailto:info@translogistics.ru">info@translogistics.ru</a>
              <br />
              <a href="mailto:support@translogistics.ru">
                support@translogistics.ru
              </a>
            </div>
            <div className={styles.contacts__details__item__icon}>
              <Icon
                icon="material-symbols-light:alternate-email-rounded"
                width="50"
                height="50"
              />
            </div>
          </div>
          <div className={styles.contacts__details__item}>
            <div className={styles.contacts__details__item__arrow}>
              <Icon
                icon="material-symbols-light:arrow-insert"
                width="24"
                height="24"
              />
            </div>
            <div className={styles.contacts__details__item__title}>
              Наш офис
            </div>
            <div className={styles.contacts__details__item__description}>
              г. Краснодар, Цветочная улица, 31
            </div>
            <div className={styles.contacts__details__item__icon}>
              <Icon
                icon="material-symbols-light:location-on-outline-rounded"
                width="50"
                height="50"
              />
            </div>
          </div>
          <div className={styles.contacts__details__item}>
            <div className={styles.contacts__details__item__arrow}>
              <Icon
                icon="material-symbols-light:arrow-insert"
                width="24"
                height="24"
              />
            </div>
            <div className={styles.contacts__details__item__title}>
              Номер телефона
            </div>
            <div className={styles.contacts__details__item__description}>
              <a href="tel:+79003332211">+7 (900) 333-22-11</a>
              <br />
              <a href="tel:+79005552211">+7 (900) 555-22-11</a>
            </div>
            <div className={styles.contacts__details__item__icon}>
              <Icon
                icon="material-symbols-light:headset-mic-rounded"
                width="50"
                height="50"
              />
            </div>
          </div>
          <div className={styles.contacts__details__item}>
            <div className={styles.contacts__details__item__arrow}>
              <Icon
                icon="material-symbols-light:arrow-insert"
                width="24"
                height="24"
              />
            </div>
            <div className={styles.contacts__details__item__title}>
              Режим работы
            </div>
            <div className={styles.contacts__details__item__description}>
              Пн-Сб: 08:00 - 20:00 <br />
              Вс: выходной
            </div>
            <div className={styles.contacts__details__item__icon}>
              <Icon
                icon="material-symbols-light:nest-clock-farsight-analog-outline-rounded"
                width="50"
                height="50"
              />
            </div>
          </div>
        </div>
        <div className={styles.contacts__form}>
          <div className={styles.contacts__form__inner}>
            <SectionTitle
              title="Напишите нам, что вы хотите знать"
              subtitle="Свяжитесь с нами"
            />
            <div className={styles.contacts__form__content}>
              Наша компания гарантирует профессиональный подход к организации
              грузоперевозок. Каждый этап доставки контролируется опытными
              логистами, чтобы ваш груз прибыл в целости и сохранности точно в
              срок.
            </div>
          </div>
          <div className={styles.contacts__form__container}>
            <div className={styles.contacts__form__title}>
              Отправить сообщение
            </div>
            <div className={styles.contacts__form__description}>
              Обязательные поля отмечены *
            </div>
            <form
              className={styles.contacts__form__wrapper}
              ref={formRef}
              onSubmit={sendEmail}
              action=""
            >
              <Input
                className={styles.contacts__form__wrapper__item}
                classNames={{
                  inputWrapper: styles.contacts__form__wrapper__item__inner,
                }}
                variant="bordered"
                radius="full"
                label="Ваше имя *"
                type="text"
                name="send_name"
                required
              />
              <Input
                className={styles.contacts__form__wrapper__item}
                classNames={{
                  inputWrapper: styles.contacts__form__wrapper__item__inner,
                }}
                variant="bordered"
                radius="full"
                label="Ваша почта *"
                type="email"
                name="send_email"
                required
              />
              <Input
                className={clsx(
                  styles.contacts__form__wrapper__item,
                  styles.contacts__form__wrapper__item__span
                )}
                classNames={{
                  inputWrapper: clsx(
                    styles.contacts__form__wrapper__item__inner
                  ),
                }}
                variant="bordered"
                radius="full"
                label="Тема *"
                type="text"
                name="send_theme"
                required
              />
              <Textarea
                className={clsx(
                  styles.contacts__form__wrapper__item,
                  styles.contacts__form__wrapper__item__span
                )}
                classNames={{
                  inputWrapper: styles.contacts__form__wrapper__item__message,
                }}
                label="Ваше сообщение *"
                required
                radius="full"
                name="send_message"
              />
              <Button
                type="submit"
                className={styles.contacts__form__wrapper__btn}
                radius="full"
                endContent={
                  <Icon
                    icon="material-symbols-light:arrow-outward"
                    width="24"
                    height="24"
                    className={styles.header__btn__icon}
                  />
                }
              >
                Отправить
              </Button>
            </form>
          </div>
        </div>
        <div className={styles.contacts__map}>
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A62a577af6ed3bddc487e09cb3c898cd433ef67c0de064dd5ee2e22cd4bd79695&amp;source=constructor"
            width="100%"
            height="500"
            frameBorder="0"
          ></iframe>
        </div>
      </div>
    </main>
  );
}

export default Contacts;
