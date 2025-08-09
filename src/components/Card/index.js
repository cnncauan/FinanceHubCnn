import { Link } from 'react-router-dom';
import styles from './Card.module.css'

import unFavoriteIcon from '@mui/icons-material/FavoriteBorder'; // Ícone sem preenchimento
import FavoriteIcon from '@mui/icons-material/Favorite'; // Ícone preenchido

import { useFavoriteContext } from '../../context/favorites';

function Card({ id }){
    const { favorite, addFavorite } = useFavoriteContext()
    const isFavorite = favorite.some((fav) => fav.id === id)
    
    const IconeComponente = isFavorite ? FavoriteIcon : unFavoriteIcon;

    return(
        <section className={styles.card}>
            <Link to={`/watch/${id}`}>
                <img
                    src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`}
                    alt='Capa'
                />
            </Link>
            <figure className={styles.icon}>
                <IconeComponente
                    className={styles.capa}
                    onClick={() => addFavorite({id})}
                    sx={{
                      color: 'red'
                    }}
                />
            </figure>
        </section>
    );
}

export default Card;