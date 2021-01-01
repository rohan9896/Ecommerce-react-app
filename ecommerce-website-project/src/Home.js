import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__img"
        src="https://d314ueg0lpx3nd.cloudfront.net/banner/3cc44886147-1520CBdweb.jpg"
        alt="banner"
      />

      {/* Product id, title, price, rating, image */}
      <div className="home__row">
        <Product
            id="12321341"
            title="Ecosprin Av 75mg Strip Of 15 Capsules"
            price="50"
            rating={5}
            image="https://cdn01.pharmeasy.in/dam/products/064422/ecosprin-av-75mg-strip-of-15-capsules-box-front-1-1607600154.jpg"
        />
        <Product
            id="12321341"
            title="Ecosprin Av 75mg Strip Of 15 Capsules"
            price="50"
            rating={5}
            image="https://cdn01.pharmeasy.in/dam/products/064422/ecosprin-av-75mg-strip-of-15-capsules-box-front-1-1607600154.jpg"
        />
      </div>
      <div className="home__row">
        <Product
            id="12321341"
            title="Ecosprin Av 75mg Strip Of 15 Capsules"
            price="50"
            rating={5}
            image="https://cdn01.pharmeasy.in/dam/products/064422/ecosprin-av-75mg-strip-of-15-capsules-box-front-1-1607600154.jpg"
        />
        <Product
            id="12321341"
            title="Ecosprin Av 75mg Strip Of 15 Capsules"
            price="50"
            rating={5}
            image="https://cdn01.pharmeasy.in/dam/products/064422/ecosprin-av-75mg-strip-of-15-capsules-box-front-1-1607600154.jpg"
        />
        <Product
            id="12321341"
            title="Ecosprin Av 75mg Strip Of 15 Capsules"
            price="50"
            rating={5}
            image="https://cdn01.pharmeasy.in/dam/products/064422/ecosprin-av-75mg-strip-of-15-capsules-box-front-1-1607600154.jpg"
        />
      </div>
      <div className="home__row">
        <Product
            id="12321341"
            title="Ecosprin Av 75mg Strip Of 15 Capsules"
            price="50"
            rating={5}
            image="https://cdn01.pharmeasy.in/dam/products/064422/ecosprin-av-75mg-strip-of-15-capsules-box-front-1-1607600154.jpg"
        />
      </div>
      {/* Product */}
    </div>
  );
}

export default Home;
