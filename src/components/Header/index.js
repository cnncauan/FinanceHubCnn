import styles from "./Header.module.css";
import imgLogo from "./moneyy.png"

function Header() {
    return(
        <header className={styles.header}>
            <span>FinanceHubCnn</span>
            <img src={imgLogo} alt="Logo FinanceHubCnn" className={styles.logo} />
            <nav>
                <a href="#">Home</a>
                <a href="#">Assistir</a>
            </nav>
        </header>
    );
}

export default Header;