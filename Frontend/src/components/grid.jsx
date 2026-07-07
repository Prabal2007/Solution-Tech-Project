import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./card";
import './grid.css';

function grid() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios
      .get("")
      .then((r) => {
        setCards(r.data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="grid">
      {cards.map((item) => {
        <Card
          key={item.id}
          title={item.title}
          cost={item.cost}
          percent={item.percent}
          link={item.link}
        />;
      })}
    </div>
  );
}

export default grid;
