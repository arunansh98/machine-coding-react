import { memo, useMemo } from "react";
import "./ShowCartModal.css";

const ShowCartModal = memo(
  ({ products, setShowCartModal, updateCartCount }) => {
    const totalAmount = useMemo(() => {
      return products.reduce(
        (acc, curr) => acc + Math.round(curr.price * curr.cartCount),
        0
      );
    }, [products]);

    return (
      <div className="parent-container">
        <div className="child-container">
          <div className="child">
            <div className="cross-btn" onClick={() => setShowCartModal(false)}>
              X
            </div>
            <div
              style={{
                display: "flex",
                marginTop: "3rem",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                gap: "1rem",
                width: "100%",
              }}
            >
              {(!products || products?.length === 0) && (
                <h3>No products present in cart !</h3>
              )}
              {products &&
                products?.length > 0 &&
                products.map((product, index) => (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                  >
                    <div className="show-cart-product-container">
                      <img
                        className="show-cart-product"
                        src={product.image}
                        key={index}
                        alt={product.title}
                      />
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
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        marginTop: "0.5rem",
                      }}
                    >
                      <span style={{ marginRight: "0.5rem" }}>
                        Rs.{product.price} <b>x</b>
                      </span>
                      <span>
                        {product.cartCount} = Rs.
                        {Math.round(product.cartCount * product.price)}
                      </span>
                    </div>
                  </div>
                ))}
              {products && products?.length > 0 && (
                <>
                  <span
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Total Amount : <b>Rs.{totalAmount}</b>
                  </span>
                  <button
                    style={{
                      width: "10rem",
                      marginBottom: "1rem",
                    }}
                    className="product-add-to-cart"
                  >
                    Buy Now
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default ShowCartModal;
