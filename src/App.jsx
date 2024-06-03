import "./scss/app.scss";
import { Route, Routes } from "react-router-dom";

import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="*" element={<NotFound />} />
        <Route index element={<Home />} />
        <Route path="cart" element={<Cart />} />
      </Route>
    </Routes>
  );
};

export default App;
