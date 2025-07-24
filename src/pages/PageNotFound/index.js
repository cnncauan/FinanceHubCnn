import Footer from '../../components/Footer'
import Header from '../../components/Header'
import erro404 from './img/404.png'
import styles from './PageNotFound.module.css'


function PageNotFOund(){
    return (
        <>
        <Header/>
        <section className={styles.container}>
            <h2>Ops! Conteúdo não localizado</h2>
            <img src={erro404} alt='Logo de página não localizad'/>
        </section>
        
        <Footer/>
        </>
    ) 
}

export default PageNotFOund