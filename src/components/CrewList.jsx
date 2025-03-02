import { useCrew } from "../contexts/CrewContext";
import CrewItem from "./CrewItem";
import styles from "./CrewList.module.css";

function CrewList() {
  const { members } = useCrew();

  console.log(members);

  return (
    <div className={styles.crewList}>
      <h2>Crew</h2>
      <li>
        {members.map((member) => (
          <CrewItem key={member.id} member={member} />
        ))}
      </li>
    </div>
  );
}

export default CrewList;
