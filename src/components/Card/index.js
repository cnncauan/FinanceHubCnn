import { Link } from 'react-router-dom';
import styles from './Card.module.css'

import FavoriteIcon from '@mui/icons-material/Favorite';

function Card({ id }){
    return(
        <section className={styles.card}>
            <Link to={`/watch/${id}`}>     
                <img 
                    src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`} 
                    alt='Capa'
                />
            </Link>
            <figure className={styles.icon}>
                <FavoriteIcon className={styles.capa}/>
            </figure>
        </section>
    );
}

export default Card;