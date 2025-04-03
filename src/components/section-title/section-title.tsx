import { ReactElement } from "react";
import styles from "./section-title.module.scss";
import clsx from "clsx";

interface Props {
  title: string;
  subtitle: string;
  center?: boolean;
  column?: boolean;
  light?: boolean;
}

function SectionTitle({
  title,
  subtitle,
  center,
  column,
  light,
}: Props): ReactElement {
  return (
    <div
      className={clsx(
        styles.section_title,
        center && styles.center,
        column && styles.column,
        light && styles.light
      )}
    >
      <h3 className={styles.section_title__subtitle}>{subtitle}</h3>
      <h2 className={styles.section_title__title}>{title}</h2>
    </div>
  );
}

export default SectionTitle;
