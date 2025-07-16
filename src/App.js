import Banner from "./components/Banner";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header/>
      <Banner image="home" />
      <Container>
        <h1>hellow</h1>
        <p>olá, mundo</p>
      </Container>
      <Footer/>
    </>
  );
}

export default App;
