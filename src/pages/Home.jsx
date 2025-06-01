import React from "react";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";

export default function Home() {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

    const [activeIndex, setActiveIndex] = React.useState(0);
    const [selected, setSelected] = React.useState(0);

  React.useEffect(() => {
    fetch("https://683aa5cf43bb370a867346fc.mockapi.io/pizza-items").then(
      (res) => {
        return res.json().then((arr) => {
          setItems(arr);
          setIsLoading(false);
        });
      }
    );
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, i) => <Skeleton key={i} />)
          : items.map((item) => <PizzaBlock {...item} key={item.id} />)}
      </div>
    </div>
  );
}
