import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import "./App.css";

export default function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<AboutUs />} />
          <Route 
            path="/plants"
            element={
              <>
                <Header />
                <ProductList />
              </>
            }
          />          
          <Route 
            path="/cart"
            element={
              <>
                <Header />
                <CartItem />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  )
}