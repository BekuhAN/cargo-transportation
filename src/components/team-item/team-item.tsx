import { ReactElement } from "react";
import styles from "./team-item.module.scss";
import { TeamItem as Team } from "../../interfaces/team-item";

interface Props {
  item: Team;
}

function TeamItem({ item }: Props): ReactElement {
  return (
    <div className={styles.team_item}>
      <div className={styles.team_item__image}>
        <img src={`../../assets/${item.image}`} />
      </div>
      <div className={styles.team_item__inner}>
        <div className={styles.team_item__name}>{item.name}</div>
        <div className={styles.team_item__position}>{item.position}</div>
      </div>
    </div>
  );
}

export default TeamItem;
