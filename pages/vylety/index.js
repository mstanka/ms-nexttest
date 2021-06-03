import Menu from '../../components/Menu';
import TripList from '../../components/TripList';
import { trips } from '../../data/trips';
import styles from '../../styles/Home.module.css';

const TripPage = () => {
  return (
    <div className={styles.container}>
      <Menu />
      <TripList trips={trips} />
    </div>
  );
};

export default TripPage;
