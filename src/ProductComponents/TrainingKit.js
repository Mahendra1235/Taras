import React, { useState } from "react";
import kit1 from "../assets/Trainingkits/Kicad-7-PCB-Layout...jpg";
import kit2 from "../assets/Trainingkits/advanced-circuit-board-stockcake.jpg";
import kit3 from "../assets/Trainingkits/close-up-modern-circuit-board-processor_23-2151977504.avif";
import kit4 from "../assets/Trainingkits/free-photo-of-pcb-in-hand.jpeg";
import kit5 from "../assets/Trainingkits/futuristic-circuit-board-glowing-technology-innovation-modern-design_191095-90301.avif";
import kit6 from "../assets/Trainingkits/unnamed.jpg";
import "../App.css";

const products = [
  { id: 1, name: "VLSI Training Kit-1", price: 299, image: kit1 },
  { id: 2, name: "VLSI Training Kit-2", price: 500, image: kit2 },
  { id: 3, name: "VLSI Training Kit-3", price: 799, image: kit3 },
  { id: 4, name: "VLSI Training Kit-4", price: 899, image: kit4 },
  { id: 5, name: "VLSI Training Kit-5", price: 699, image: kit5 },
  { id: 6, name: "VLSI Training Kit-6", price: 999, image: kit6 },
];

function TrainingKit() {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.product.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { product, quantity: 1 }];
    });
  }

  function removeFromCart(productId) {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.product.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  const totalPrice = cart.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  return (
    <div className="container">
  <h1>Training Kits</h1>
  <p>Explore our hands-on training kits for VLSI, Embedded Systems, and AI/ML.</p>

  {/* New flex wrapper */}
  <div className="content-wrapper">
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <img
            src={product.image}
            alt={product.name}
            className="product-image"
          />
          <h3>{product.name}</h3>
          <p style={{ fontWeight: "bold" }}>₹{product.price}</p>
          <button
            onClick={() => addToCart(product)}
            className="button-add"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>

    <div className="cart-wrapper">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <table className="cart-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Total</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cart.map(({ product, quantity }) => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{quantity}</td>
                  <td>₹{product.price}</td>
                  <td>₹{product.price * quantity}</td>
                  <td>
                    <button
                      onClick={() => removeFromCart(product.id)}
                      className="button-remove"
                      title="Remove one"
                    >
                      &times;
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="3" style={{ textAlign: "right", fontWeight: "bold" }}>
                  Total:
                </td>
                <td style={{ fontWeight: "bold" }}>₹{totalPrice}</td>
                <td></td>
              </tr>
            </tfoot>
          </table>

          <button
            onClick={() => alert("Checkout functionality coming soon!")}
            className="checkout-button"
          >
            Checkout
          </button>
        </div>
      )}
    </div>
  </div>
</div>

  );
}

export default TrainingKit;
