import styles from './Category.module.css';
import videos from "../../json/videos.json";
import texts from "../../json/text.json";

import { Player } from "@lottiefiles/react-lottie-player";

// Importe o arquivo JSON da animação
import fakeCoinAnimation from '../../json/Fake 3D vector coin.json'; // Ajuste o caminho se necessário
import walletCoinAnimation from '../../json/Wallet Animation.json';
import memeCoinAnimation from '../../json/Coin without Glow.json';
import tradeCoinAnimation from '../../json/Trade graph.json';
import rwaCoinAnimation from '../../json/SASSA.json';
import rendaFixaCoinAnimation from '../../json/Money Transfer.json';


export const categories = [
  "Bitcoin",
  "Wallet",
  "Memecoin",
  "Trade",
  "Rwa",
  "Rendafixa",
];

// Esta função retorna um array de vídeos filtrados por categoria.
export function filterCategory(id) {
  return videos.filter(video => video.category === categories[id]);
}

// Esta nova função encontra o objeto de texto correspondente à categoria.
export function findCategoryText(categoryName) {
  // O método `find` percorre o array `texts` e retorna o primeiro item que atende à condição.
  return texts.find(textItem => textItem.categoryText === categoryName);
}

function Category({ category, children }) {
  // Chamamos a função para buscar o texto da categoria atual.
  const categoryText = findCategoryText(category);

  return (
    <section className={styles.category}>
      <div className= {styles.categoryTitleContainer}>
        <h2>{category}</h2> 
      
        {category === "Bitcoin" && (
              <Player
                autoplay
                loop
                src={fakeCoinAnimation}
                style={{ width: 50, height: 50 }}
              />
        )}
        {category === "Wallet" && (
              <Player
                autoplay
                loop
                src={walletCoinAnimation}
                style={{ width: 50, height: 50 }}
              />
        )}
        {category === "Memecoin" && (
              <Player
                autoplay
                loop
                src={memeCoinAnimation}
                style={{ width: 50, height: 50 }}
              />
        )}
        {category === "Trade" && (
              <Player
                autoplay
                loop
                src={tradeCoinAnimation}
                style={{ width: 50, height: 50 }}
              />
        )}
        {category === "Rwa" && (
              <Player
                autoplay
                loop
                src={rwaCoinAnimation}
                style={{ width: 50, height: 50 }}
              />
        )}
        {category === "Rendafixa" && (
              <Player
                autoplay
                loop
                src={rendaFixaCoinAnimation}
                style={{ width: 50, height: 50 }}
              />
        )}
      </div>

      {categoryText && (
        <p className={styles.categoryDescription}>
          {categoryText.text}
        </p>
      )}

      <div>
        {children}
      </div>
    </section>
  );
}

export default Category;