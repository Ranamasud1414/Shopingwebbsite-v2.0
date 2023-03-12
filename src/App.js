import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Shop from "./pages/Shop/Shop";
import Cart from "./pages/Cart/Cart";
import Home from "./components/Home";
import ShopContextProvider from "./context/shop-context";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <HashRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </HashRouter>
      </ShopContextProvider>
    </div>
  );
}

export default App;
