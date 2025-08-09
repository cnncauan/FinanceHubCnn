// src/Components/CryptoNewsCarousel.jsx
import CryptoNewsCard from '../components/CryptoNewsCard';
import cryptoNews from '../data';
import styles from './CryptoNewsCarousel.module.css';

export default function CryptoNewsCarousel() {
  // Duplique o array para criar o efeito de loop infinito
  const carouselItems = [...cryptoNews, ...cryptoNews];

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carouselTrack}>
        {carouselItems.map((news, index) => (
          <CryptoNewsCard key={`${news.id}-${index}`} news={news} />
        ))}
      </div>
    </div>
  );
}