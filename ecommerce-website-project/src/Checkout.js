import React from "react";
import { useStateValue } from "./StateProvider";
import banner from "./img/banner-checkout.jpg";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import CurrencyFormat from 'react-currency-format';

function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <img className="checkout__img" src={banner} alt="banner" />
      <div className="checkout__belowimgContainer">
        <div className="checkout__left">
          {basket?.length === 0 ? (
            <div className="checkout__title">
              <h2>Your shopping basket is empty</h2>
              <p>
                You have no items in your basket. To buy one click on Add to cart
                button🙃
              </p>
            </div>
          ) : (
            <div className="checkout__title">
              <h2>Your shopping basket</h2>

              {/* List of all the checkout products */}
              {basket?.map((item) => (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image = {item.image}
                  price={item.price}
                  rating={item.rating}
                />
              ))}
            </div>
          )}
        </div>
        {basket.length > 0 && (
          <div className="checkout__right">
            <Subtotal />
          </div>
        )}
      </div>
    </div>
  );
}

export default Checkout;
