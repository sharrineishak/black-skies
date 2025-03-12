import { useCrew } from "../contexts/CrewContext";
import Button from "../components/Button";
import CrewItem from "../components/CrewItem";
import styles from "./CrewList.module.css";
import ActionBar from "../components/ActionBar";

function CrewList() {
  const { members } = useCrew();

  console.log(members);

  return (
    <div className={styles.crewList}>
      <h1>Crew List</h1>
      <ActionBar align="right">
        <Button>Manage</Button>
      </ActionBar>

      <li>
        {members.map((member) => (
          <CrewItem key={member.id} member={member} />
        ))}
      </li>
    </div>
  );
}

export default CrewList;
