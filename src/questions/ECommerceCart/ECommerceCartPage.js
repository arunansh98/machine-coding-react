import { useEffect, useState } from "react";
import ShowCartModal from "./ShowCartModal";
import "./ECommerceCartPage.css";

export default function ECommerceCartPage() {
  const [products, setProducts] = useState([]);

  const [showCartModal, setShowCartModal] = useState(false);

  const fetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const json = await response.json();
    const fetchedProducts = json.map((item) => ({
      ...item,
      cartCount: 0,
      price: Math.round(item.price),
    }));
    setProducts(fetchedProducts);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const updateCartCount = (type, id) => {
    let modifyCount;
    switch (type) {
      case "add": {
        modifyCount = 1;
        break;
      }
      case "delete": {
        modifyCount = -1;
        break;
      }
      default:
        throw new Error("Invalid count !");
    }
    const updatedProducts = products.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          cartCount: item?.cartCount + modifyCount,
        };
      }
      return item;
    });
    setProducts(updatedProducts);
  };

  const renderedProducts = products.map((product, index) => (
    <div className="product-container" key={index}>
      <img className="product-image" src={product.image} alt={product.title} />
      <h4 className="product-title">Rs. {product.title}</h4>
      <h3>Rs. {product.price}</h3>
      {product.cartCount === 0 && (
        <button
          className="product-add-to-cart"
          onClick={() => updateCartCount("add", product.id)}
        >
          Add to Cart
        </button>
      )}
      {product.cartCount > 0 && (
        <div>
          <button
            className="product-cart-add"
            style={{}}
            onClick={() => updateCartCount("delete", product.id)}
          >
            -
          </button>
          {product.cartCount}
          <button
            className="product-cart-delete"
            onClick={() => updateCartCount("add", product.id)}
          >
            +
          </button>
        </div>
      )}
    </div>
  ));

  const showCartProducts = products.filter((product) => product.cartCount > 0);

  const clearCart = () => {
    const clearedCartProducts = products.map((product) => ({
      ...product,
      cartCount: 0,
    }));
    setProducts(clearedCartProducts);
  };

  return (
    <>
      <div
        style={{
          marginTop: "2rem",
        }}
      >
        <div className="show-cart-container">
          <button
            className="show-cart-button"
            onClick={() => setShowCartModal(true)}
          >
            Show Cart
          </button>
          <button className="clear-cart-button" onClick={() => clearCart()}>
            Clear Cart
          </button>
        </div>
        <div className="e-commerce-cart">{renderedProducts}</div>
      </div>
      {showCartModal && (
        <ShowCartModal
          products={showCartProducts}
          setShowCartModal={setShowCartModal}
          updateCartCount={updateCartCount}
        />
      )}
    </>
  );
}
