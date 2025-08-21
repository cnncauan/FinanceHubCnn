import "./button.css"; // Importação direta, sem o 'style'

function ScrollToTopButton() {

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        // Use a classe CSS diretamente como uma string
        <button onClick={handleClick} className="scrollButton">
            &#9650;
        </button>
    );
}

export default ScrollToTopButton;