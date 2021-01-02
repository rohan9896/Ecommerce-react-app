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
            price={49.99}
            rating={4}
            image="https://cdn01.pharmeasy.in/dam/products/064422/ecosprin-av-75mg-strip-of-15-capsules-box-front-1-1607600154.jpg"
        />
        <Product
            id="12321342"
            title="Neuherbs Special Fitness Stack Combo ( Whey Protein 2lbs, Fish Oil 60 Soft Gel, True Vitamin) - 60 Tablets"
            price={1798.50}
            rating={3}
            image="https://cdn01.pharmeasy.in/dam/products_otc/Y02742/neuherbs-special-fitness-stack-combo-whey-protein-2lbs-fish-oil-60-soft-gel-true-vitamin-60-tablets-2-1599596344.jpg"
        />
      </div>
      <div className="home__row">
        <Product
            id="12321343"
            title="Savlon Surface Disinfectant Spray 170 Ml"
            price={143.1}
            rating={5}
            image="https://cdn01.pharmeasy.in/dam/products_otc/O26428/savlon-surface-disinfectant-spray-170-ml-1.jpg?dim=240x0&dpr=1.25&q=80"
        />
        <Product
            id="12321344"
            title="Dr Morepen Bg 03 Glucometer Test Strips Box Of 50"
            price={611.28}
            rating={2}
            image="https://cdn01.pharmeasy.in/dam/products_otc/I05582/dr-morepen-bg-03-glucometer-test-strips-box-of-50-1-1604484376.jpg?dim=240x0&dpr=1.25&q=80"
        />
        <Product
            id="12321345"
            title="Ducray Creastim Anti-Hair Loss Lotion 2 x 30 ml"
            price={4119.99}
            rating={3}
            image="https://www.netmeds.com/images/product-v1/150x150/805690/ducray_creastim_lotion_pack_of_2_x_30_ml_0_3.jpg"
        />
      </div>
      <div className="home__row">
        <Product
            id="12321346"
            title="(nasomask) N95 Mask"
            price={199.91}
            rating={4}
            image="https://cdn01.pharmeasy.in/dam/products_otc/W06038/n95-premium-mask-nasomask-pack-of-1-1.jpg"
        />
      </div>
      <div className="home__row">
        <Product
            id="12321347"
            title="Accusure Digital Thermometer"
            price={197.5}
            rating={5}
            image="https://cdn01.pharmeasy.in/dam/products_otc/D73115/accusure-digital-thermometer-1pc-1.jpg?dim=240x0&dpr=1.25&q=80"
        />
        <Product
            id="12321349"
            title="Hansaplast Jumbo Bandage Packet Of 2"
            price={16.8}
            rating={3}
            image="https://cdn01.pharmeasy.in/dam/products_otc/J88298/hansaplast-jumbo-2s-1-1595951469.jpg?dim=240x0&dpr=1.25&q=80"
        />
      </div>
    </div>
  );
}

export default Home;
