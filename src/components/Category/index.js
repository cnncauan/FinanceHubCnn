import styles from './Category.module.css';
import videos from "../../json/videos.json";
import texts from "../../json/text.json";

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
      <h2>{category}</h2>
      
      {/* Usamos uma renderização condicional. Se `categoryText` existir, 
          exibimos a descrição dentro de uma tag <p>. */}
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