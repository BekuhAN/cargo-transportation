import { addToast, Button, Input } from "@heroui/react";
import { FormEvent, ReactElement, useRef } from "react";
import styles from "./calculate-form.module.scss";
import emailjs from "@emailjs/browser";
import { Icon } from "@iconify/react";

function CalculateForm(): ReactElement {
  const formRef = useRef<HTMLFormElement | null>(null);
  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    // famhur@plbks.com
    emailjs
      .sendForm("service_jcf71y2", "template_ii696id", formRef.current || "", {
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
    <>
      <form
        ref={formRef}
        onSubmit={sendEmail}
        className={styles.calculate_form}
        action=""
      >
        <Input
          className={styles.calculate_form__item}
          classNames={{ inputWrapper: styles.calculate_form__item__inner }}
          variant="bordered"
          radius="full"
          label="Ваше имя *"
          type="text"
          name="calc_name"
        />
        <Input
          className={styles.calculate_form__item}
          classNames={{ inputWrapper: styles.calculate_form__item__inner }}
          variant="bordered"
          radius="full"
          label="Ваша почта *"
          type="email"
          name="calc_email"
        />
        <Input
          className={styles.calculate_form__item}
          classNames={{ inputWrapper: styles.calculate_form__item__inner }}
          variant="bordered"
          radius="full"
          label="Откуда *"
          type="text"
          name="calc_from"
        />
        <Input
          className={styles.calculate_form__item}
          classNames={{ inputWrapper: styles.calculate_form__item__inner }}
          variant="bordered"
          radius="full"
          label="Куда *"
          type="text"
          name="calc_to"
        />
        <Input
          className={styles.calculate_form__item}
          classNames={{ inputWrapper: styles.calculate_form__item__inner }}
          variant="bordered"
          radius="full"
          label="Вес, кг *"
          type="text"
          name="calc_weight"
        />
        <Input
          className={styles.calculate_form__item}
          classNames={{ inputWrapper: styles.calculate_form__item__inner }}
          variant="bordered"
          radius="full"
          label="Длина, см *"
          type="text"
          name="calc_length"
        />
        <Input
          className={styles.calculate_form__item}
          classNames={{ inputWrapper: styles.calculate_form__item__inner }}
          variant="bordered"
          radius="full"
          label="Ширина, см *"
          type="text"
          name="calc_width"
        />
        <Input
          className={styles.calculate_form__item}
          classNames={{ inputWrapper: styles.calculate_form__item__inner }}
          variant="bordered"
          radius="full"
          label="Высота, см *"
          type="text"
          name="calc_height"
        />
        <Button
          type="submit"
          className={styles.calculate_form__btn}
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
    </>
  );
}

export default CalculateForm;
