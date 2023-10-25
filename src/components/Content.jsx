import { Routes, Route } from "react-router-dom";
import Home from "./Home";

const Content = () => {
  return (
    <div className="content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        {/* <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="user" element={<User />} />
        <Route path="category" element={<Category />} />
        <Route path="messenger" element={<Messenger />} /> */}
      </Routes>
    </div>
  );
};

export default Content;
