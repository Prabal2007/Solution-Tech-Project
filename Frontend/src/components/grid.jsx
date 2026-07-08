import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import "./Grid.css";
import Pagination from "./Pagination";

function Grid({sortBy}) {
  const [cards, setCards] = useState([]);
  const [page, setPage] = useState(1);
  const [limit] = useState(15);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://127.0.0.1:5000/products?page=${page}&limit=${limit}`)
      .then((r) => {
        setCards(r.data.products || []);
        setTotal(r.data.total || 0);
      })
      .catch((e) => console.error("Failed to load products:", e))
      .finally(() => setLoading(false));
  }, [page, limit]);

  const totalPages = Math.max(1, Math.ceil(total / limit));

  const sortedCards = [...cards];

  switch (sortBy) {
    case "low":
      sortedCards.sort((a, b) => a.price - b.price);
      break;

    case "high":
      sortedCards.sort((a, b) => b.price - a.price);
      break;

    case "discount":
      sortedCards.sort((a, b) => b.discount - a.discount);
      break;

    case "name":
      sortedCards.sort((a,b) => a.title.localCompare(b.title));
      break;

    default:
      break;
  }

  return (
    <div className="grid-wrapper">
      <div className="grid">
        {loading ? (
          <div>Loading...</div>
        ) : (
          sortedCards.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              price={item.price}
              discount={item.discount}
              image={item.image}
            />
          ))
        )}
      </div>

      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={(p) => setPage(p)}
      />
    </div>
  );
}

export default Grid;
