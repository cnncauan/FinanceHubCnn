import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import imgLogo from "./moneyy.png"

function Header() {
    return(
        <header className={styles.header}>
            <Link to="/">
                <img src={imgLogo} alt="Logo FinanceHubCnn" className={styles.logo} />
                <span>FinanceHubCnn</span>
            </Link>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/Watch">Assitir</Link>
            </nav>
        </header>
    );
}

export default Header;