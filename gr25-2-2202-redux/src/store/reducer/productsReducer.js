const products = [
  { id: 1, title: "titel1", price: "111", discount: "10" },
  { id: 2, title: "titel2", price: "222", discount: "20" },
  { id: 3, title: "titel3", price: "333", discount: "30" },
];

const ADDPROD = "ADDPROD";
const DELPROD = "DELPROD";

// export function addProductAction(data) {
//   return {
//     type: ADDPROD,
//     payload: data,
//   };
// }

export const productsReducer = (state = products, action) => {
  if (action.type === ADDPROD) {
    // const newArr = [...state];
    // console.log(action.payload);
    // newArr.push(action.payload);
    return [...state, action.payload];
  } else if (action.type === DELPROD) {
    const newArr = state.filter(({ id }) => id !== action.payload);
    return newArr;
  } else {
    return state;
  }
};