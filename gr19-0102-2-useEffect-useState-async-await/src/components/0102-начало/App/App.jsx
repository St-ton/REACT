import BasketItem from '../BasketItem/BasketItem';
import Calculation from '../Calculation/Calculation';
// import './App.css';
import { useState } from 'react';



export default function App()
{
  const defaultProducts = [
    { id: 1, title: "Велосипед", price: 45000, count: 1 },
    { id: 2, title: "Ролики", price: 15000, count: 2 },
    { id: 3, title: "Самокат", price: 17000, count: 3 },
    { id: 4, title: "Скейт", price: 22000, count: 3 },
    { id: 5, title: "Лыжи", price: 27000, count: 3 },
  ];

  const increment = value =>
  {
    const target = basket.find(({ id }) => id === value);
    target.count++;
    setBasket([...basket]);
  }

  const decrement = value =>
  {
    const target = basket.find(({ id }) => id === value);
    target.count--;
    if (target.count === 0)
    {
      setBasket(basket.filter(elem => elem !== target));
    } else
    {
      setBasket([...basket]);
    }
  }

  const [basket, setBasket] = useState(defaultProducts);
  

  return (
    <div>
      <div>
        {basket.map(item =>
          <BasketItem
            increment={increment}
            decrement={decrement}
            key={item.id}
            {...item}
          />)};
      </div>
      <div>
        <Calculation />
      </div>
    </div>
  );
}
