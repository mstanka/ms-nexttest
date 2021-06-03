import Image from 'next/image';
import { getAllTrips } from '../../data/trips';
import styles from '../../styles/Home.module.css';

const trips = getAllTrips();

const Trip = ({ trip }) => {
  return (
     <div className={styles.container}>
      <Image src={`/images/${trip.id}.jpg`} width={800} height={500} alt={trip.title} />
      <h1>{trip.title}</h1>
      <p>{trip.about}</p>
      <p>{trip.description}</p>
    </div>
  );
};

export const getStaticPaths = () => {
  const tripPaths = trips.map((trip) => {
    return {
      params: {
        id: trip.id,
      },
    };
  });

  return {
    paths: tripPaths,
    fallback: false,
  };
};

export const getStaticProps = ({ params }) => {
  return {
    props: {
      trip: trips.find((trip) => trip.id === params.id),
    },
  };
};
export default Trip;
