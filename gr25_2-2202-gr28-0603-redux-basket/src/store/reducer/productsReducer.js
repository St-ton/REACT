const ADDPROD = "ADDPROD";
const DELPROD = "DELPROD";

export const addProductAction = (title, price, discount) => {
  return {
    type: ADDPROD,
    payload: { id: Date.now(), title, price, discount },
  };
};

export const deleteProductAction = (id) => ({ type: DELPROD, payload: id });

const products = [
  { id: 1, title: "titel1", price: "111", discount: "10" },
  { id: 2, title: "titel2", price: "222", discount: "20" },
  { id: 3, title: "titel3", price: "333", discount: "30" },
  { id: 4, title: "titel4", price: "444", discount: "40" },
];

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
    return state.filter(({ id }) => id !== action.payload);
  } else {
    return state;
  }
};

//todo сформировать на основе basket и products массив basketDescr который содержит объекты со свойствами id, title, price, discount, count
