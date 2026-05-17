import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectTotalQuantity } from "../redux/CartSlice";
import "./Header.css";

function Header() {
  const totalQuantity = useSelector(selectTotalQuantity);

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Paradise Nursery</Link>
      </div>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/plants">Plants</Link>
        <Link to="/cart" className="cart-link">
          <span className="cart-icon">🛒</span>
          <span className="cart-count">{totalQuantity}</span>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
