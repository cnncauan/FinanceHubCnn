import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Conteiner from "../../components/Container"
import styles from "./Favorite.module.css"

function Favorite() {
    return (
        <>
            <Header/>
            <Conteiner>
                <section className={styles.favorite}>
                    <h2>Meus favoritos</h2>
                    Lista de video
                </section>
            </Conteiner>
            <Footer/>
        </>
    )
}

export default Favorite