import Image from 'next/image';
import Button from '../ui/button';
import TagIcon from '../icons/TagIcon';
import AboutIcon from '../icons/AboutIcon';
import ArrowRightIcon from '../icons/ArrowRightIcon';
import styles from './trip.module.css';

const Trip = ({ title, image, type, difficulty, about, id }) => {
  const exploreMoreLink = `/vylety/${id}`;

  return (
    <li className={styles.trip}>
      <Image
        src={`/images/${id}.jpg`}
        alt={title}
        width={500}
        height={400}
        className={styles.image}
      />
      <div className={styles.content}>
        <div className={styles.summary}>
          <h2>{title}</h2>
          <div className={styles.label}>
            <TagIcon />
            <p>
              {difficulty} | {type}
            </p>
          </div>
          <div className={styles.about}>
            <AboutIcon />
            <p>{about}</p>
          </div>
        </div>
        <div className={styles.actions}>
          <Button link={exploreMoreLink}>
            <span>Explore Trip</span>
            <span className={styles.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default Trip;
