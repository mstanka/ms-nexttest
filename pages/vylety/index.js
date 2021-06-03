import Menu from '../../components/Menu';
import TripList from '../../components/TripList';
import { getAllTrips } from '../../data/trips';
import styles from '../../styles/Home.module.css';

const TripsPage = ({trips}) => {

  return (
    <div className={styles.container}>
      <Menu />
      <TripList trips={trips} />
    </div>
  );
};

export default TripsPage;

export const getStaticProps = () => {
  return {
    props: {
      trips: getAllTrips(),
    },
  };
};
