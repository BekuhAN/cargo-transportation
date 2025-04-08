import { ReactElement } from "react";
import SectionTitle from "../section-title/section-title";
import styles from "./team.module.scss";
import { useTeam } from "../../data-access/team/use-team";
import TeamItem from "../team-item/team-item";

function Team(): ReactElement {
  const teamList = useTeam();
  return (
    <section className={styles.team}>
      <div className="container">
        <SectionTitle
          title="Познакомьтесь с членами нашей команды"
          subtitle="Наша команда"
          column={true}
        />
        <div className={styles.team__list}>
          {teamList.length > 0 &&
            teamList.map((item) => <TeamItem key={item.id} item={item} />)}
        </div>
      </div>
    </section>
  );
}

export default Team;
