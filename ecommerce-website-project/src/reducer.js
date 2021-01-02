export const initialState = {
  basket: [
    {
      id: "12321341",
      title: "Ecosprin Av 75mg Strip Of 15 Capsules",
      price: 50,
      rating: 5,
      image:
        "https://cdn01.pharmeasy.in/dam/products/064422/ecosprin-av-75mg-strip-of-15-capsules-box-front-1-1607600154.jpg",
    },
    {
        id: "12321341",
        title: "Ecosprin Av 75mg Strip Of 15 Capsules",
        price: 50,
        rating: 5,
        image:
          "https://cdn01.pharmeasy.in/dam/products/064422/ecosprin-av-75mg-strip-of-15-capsules-box-front-1-1607600154.jpg",
      },
      {
        id: "12321341",
        title: "Ecosprin Av 75mg Strip Of 15 Capsules",
        price: 50,
        rating: 5,
        image:
          "https://cdn01.pharmeasy.in/dam/products/064422/ecosprin-av-75mg-strip-of-15-capsules-box-front-1-1607600154.jpg",
      },
  ],
  user: null,
};

export const getBasketTotal = (basket) => (
  basket?.reduce((amount, item) => item.price + amount, 0)
)

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      //LOgic for adding item to basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      //Logic for removing item from basket
      let newBasket = [...state.basket];
      const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

      if(index >= 0){
          //item exists in basket, remove it
          newBasket.splice(index, 1);
      }
      else{
          console.warn(
              'Cant remove product (id: $(action.id)) as its not in basket)'
          )
      }
      return { 
          ...state,
          basket: newBasket,
       };
    default:
      return state;
  }
};

export default reducer;
