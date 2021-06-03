import MyMap from '../../components/MyMap';
import Menu from '../../components/Menu';
import styles from '../../styles/Home.module.css';

const MapPage = () => {
  return (
    <div className={styles.container}>
      <Menu />
      <MyMap />
    </div>
  );
};

export default MapPage;
