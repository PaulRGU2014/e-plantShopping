import { useDispatch, useSelector } from "react-redux";
import { addToCart, selectCartItems } from "../redux/CartSlice";
import "./ProductList.css";

const plants = [
  {
    id: "snake-plant",
    name: "Snake Plant",
    price: 18,
    image: "/images/snake-plant.webp",
    category: "Low Light",
  },
  {
    id: "ficus-lyrata",
    name: "Ficus lyrata",
    price: 15,
    image: "/images/ficus-lyrata.webp",
    category: "Trailing",
  },
  {
    id: "monstera",
    name: "Monstera Deliciosa",
    price: 32,
    image: "/images/monstera.webp",
    category: "Statement",
  },
  {
    id: "zz-plant",
    name: "ZZ Plant",
    price: 22,
    image: "/images/zz-plant.webp",
    category: "Low Light",
  },
  {
    id: "peace-lily",
    name: "Peace Lily",
    price: 20,
    image: "/images/peace-lily.webp",
    category: "Flowering",
  },
  {
    id: "string-of-pearls",
    name: "String of Pearls",
    price: 25,
    image: "/images/sting-of-pearls.webp",
    category: "Trailing",
  },
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const isInCart = (id) => cartItems.some((item) => item.id === id);

  const categories = [...new Set(plants.map((p) => p.category))];

  const handleAdd = (plant) => {
    dispatch(addToCart(plant));
  };

  return (
    <div className="product-page">
      {categories.map((category) => (
        <section key={category} className="category-section">
          <h2>{category}</h2>
          <div className="plant-grid">
            {plants
              .filter((p) => p.category === category)
              .map((plant) => (
                <div key={plant.id} className="plant-card">
                  <img
                    src={plant.image}
                    alt={plant.name}
                    className="plant-image"
                  />
                  <h3>{plant.name}</h3>
                  <p>${plant.price.toFixed(2)}</p>
                  <button
                    onClick={() => handleAdd(plant)}
                    disabled={isInCart(plant.id)}
                  >
                    {isInCart(plant.id) ? "Added" : "Add to Cart"}
                  </button>
                </div>
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default ProductList;
