import Trip from '../Trip';
import styles from './triplist.module.css';

const TripList = ({ trips }) => {
  return (
    <ul className={styles.list}>
      {trips.map((trip) => (
        <Trip
          key={trip.id}
          id={trip.id}
          title={trip.title}
          about={trip.about}
          type={trip.type}
          difficulty={trip.difficulty}
          image={trip.image}
        />
      ))}
    </ul>
  );
};

export default TripList;
