import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import imgLogo from "./moneyy.png"

import HomeIcon from '@mui/icons-material/Home';
import MovieIcon from '@mui/icons-material/Movie';
import SearchIcon from '@mui/icons-material/Search';


function Header() {
    return(
        <header className={styles.header}>
            <Link to="/" className={styles.logoLink}>
                <img src={imgLogo} alt="Logo FinanceHubCnn" className={styles.logo} />
                <span>FinanceHubCnn</span>
            </Link>
            <nav>
                <Link to="/" className={styles.navLink}>Home<HomeIcon sx={{fontSize:20}} /></Link>
                <Link to="/watch" className={styles.navLink}>Assitir<MovieIcon sx={{fontSize:20}} /></Link>
                <Link to="/search" className={styles.navLink}>Pesquisar<SearchIcon sx={{ fontSize: 20 }} /></Link>
            </nav>
        </header>
    );
}

export default Header;