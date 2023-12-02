export const initialState = {
  basket: [],
};
// Selector
export const getBasketTotal = (basket) =>
// adding to cart and and price total to cart 
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "Add_To_Basket":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    default:
      return state;
  }
};
export default reducer;
