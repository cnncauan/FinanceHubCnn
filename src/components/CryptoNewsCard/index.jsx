// src/Components/CryptoNewsCard.jsx
import styles from './CryptoNewsCard.module.css';

export default function CryptoNewsCard({ news }) {
  return (
    <a href={news.link} target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
      <div className={styles.card}>
        <img src={news.image} alt={news.title} className={styles.cardImage} />
        <h3 className={styles.cardTitle}>{news.title}</h3>
      </div>
    </a>
  );
}