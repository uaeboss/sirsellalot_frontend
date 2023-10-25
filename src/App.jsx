import "./styles/App.css";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Content from "./components/Content";
import Banner1 from "./components/Banner1";

function App() {
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <Navigation />
          <Content />
          <Footer />
          <Banner1 />
          <div className="banner2"></div>
        </div>
      </div>
    </>
  );
}

export default App;
