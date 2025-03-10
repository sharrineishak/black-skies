import { useCrew } from "../contexts/CrewContext";
import Button from "./Button/Button";
import styles from "./CrewItem.module.css";

const avatars = import.meta.glob("../assets/avatar*.png", { eager: true });

function CrewItem({ member }) {
  const { name, status, avatar, attributes } = member;

  const getAvatar = (id) => avatars[`../assets/avatar${id}.png`]?.default;

  function getStatusClass() {
    switch (status) {
      case "Available":
        return styles.available;
      case "On Expedition":
        return styles.onExpedition;
      case "In Recovery":
        return styles.recovering;
    }
  }

  return ( // TODO separate base button JSX into its own Listitem component - which can be reused later by child variants
    <Button >
      <div className={styles.crewItem}>
      <img src={getAvatar(avatar)} />
      <div className={styles.info}>
        <h3>{name}</h3>
        <p className={`${styles.status} ${getStatusClass()}`}>{status}</p>
      </div>
      <div className={styles.attributes}>
        <div>
          <p>Might</p>
          <p>
            <strong>{attributes.might}</strong>
          </p>
        </div>
        <div>
          <p>Finesse</p>
          <p>
            <strong>{attributes.finesse}</strong>
          </p>
        </div>
        <div>
          <p>Acuity</p>
          <p>
            <strong>{attributes.acuity}</strong>
          </p>
        </div>
        <div>
          <p>Wit</p>
          <p>
            <strong>{attributes.wit}</strong>
          </p>
        </div>
      </div>
      </div>
    </Button>
  );
}
export default CrewItem;
