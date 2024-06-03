import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Layout = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
          <Outlet />
      </div>
    </div>
  );
};

export default Layout;
