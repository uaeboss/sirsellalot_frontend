import Search from "./Search";
import Itemcard from "./Itemcard";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      <Search />
      <p>Home</p>
      <Itemcard />
    </div>
  );
};

export default Home;
