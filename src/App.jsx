import "./styles/App.css";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Content from "./components/Content";

function App() {
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <Navigation />
          <Content />
          <Footer />
          <div className="banner1"></div>
          <div className="banner2"></div>
        </div>
      </div>
    </>
  );
}

export default App;
