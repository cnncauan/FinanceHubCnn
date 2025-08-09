import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Conteiner from "../../components/Container"
import styles from "./Favorite.module.css"

import VideoList from '../../components/VideoList'
import { useFavoriteContext } from "../../context/favorites"

function Favorite() {

    const {favorite} = useFavoriteContext()

    return (
        <>
            <Header/>
            <Conteiner>
                <section className={styles.favorite}>
                    <h2>Meus favoritos</h2>
                    { <VideoList videos={favorite} /> }
                </section>
            </Conteiner>
            <Footer/>
        </>
    )
}

export default Favorite