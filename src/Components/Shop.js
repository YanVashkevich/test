import React, { useEffect, useState } from "react";
import "./CSSs/Shop.css";
import axios from "axios";

function Shop() {
  const [products, setProducts] = useState([]);
  const [amount, setAmount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [noteAmount, setNoteAmount] = useState(0);
  const [penAmount, setPenAmount] = useState(0);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    axios
      .get("https://6489b61b5fa58521cab01a3f.mockapi.io/products")
      .then((response) => {
        setProducts(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const addToCart = (id) => {
    setAmount(amount + 1);
    if (id == 1) {
      setNoteAmount(noteAmount + 1);
    }

    if (id == 2) {
      setPenAmount(penAmount + 1);
    }
  };

  const submitForm = (e) => {
    e.preventDefault();
  };

  const toggleModal = () => {
    setModal(!modal);
  };
  
  const buyItems = () => {
    if(penAmount !== 0 || noteAmount !== 0){
      alert('You succesfully bought your items!')
    }
    if(penAmount == 0 && noteAmount == 0){
      alert('You need to add something to cart, in order to buy something.')
    }
  }

  return (
    <div className="shop">
      <div className="shop-navbar">
        <h1 className="shop-item">Shop</h1>
        <div className="shop-el">
          <div className="whole-amount">{amount}</div>
          <button onClick={toggleModal} className="btn-modal">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/009/157/893/small/shopping-cart-set-of-shopping-cart-icon-on-white-background-shopping-cart-icon-shopping-cart-design-shopping-cart-icon-sign-shopping-cart-icon-isolated-shopping-cart-symbol-free-vector.jpg" />
          </button>

          {modal && (
            <div className="modal">
              <div className="overlay" onClick={toggleModal}></div>
              <div className="modal-content">
                <h2>Your Cart Items</h2>
                <div className="cart-note">
                  <img src='https://cdn.shopify.com/s/files/1/0831/9463/products/Gallery-Notebook-Mineral-Green.png?v=1684344954'/>
                  Notebook:{noteAmount} 
                </div>
                <div className="cart-pen">
                  <img src='https://img.freepik.com/free-vector/vector-fountain-writing-pen-contract-signing_1284-41915.jpg?w=2000'/>
                  Pen:{penAmount}
                </div>
                <button className="close-modal" onClick={toggleModal}>
                  <img src="cross.png"/>
                </button>
                <button onClick={buyItems} className="buy-all">Buy</button>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="text-shop">
        If you are not a fan of internet things, I suggest you to buy our real
        life products in our shop to note your ToDo's !
      </div>

      <div className="products">
        <ul className="list-of-products">
          {isLoading ? (
            <h1> Loading... </h1>
          ) : (
            products.map((product) => {
              return (
                <li key={product.id}>
                  <form onSubmit={submitForm}>
                    <img
                      src={
                        product.id == 1
                          ? "https://cdn.shopify.com/s/files/1/0831/9463/products/Gallery-Notebook-Mineral-Green.png?v=1684344954"
                          : "https://img.freepik.com/free-vector/vector-fountain-writing-pen-contract-signing_1284-41915.jpg?w=2000"
                      }
                    />
                    <div className="name-of-product">{product.name}</div>
                    <div className="price">${product.price}</div>
                    <button
                      onClick={() => addToCart(product.id)}
                      className="add-to"
                    >
                      Add To Cart
                    </button>
                  </form>
                </li>
              );
            })
          )}
        </ul>
      </div>
    </div>
  );
}

export default Shop;
