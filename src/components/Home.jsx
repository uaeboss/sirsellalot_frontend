import Search from "./Search";
import Itemcard from "./Itemcard";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="center">
      <div className="home">
        <Search />
        <p>Home</p>
        <Itemcard />
      </div>
    </div>
  );
};

export default Home;
