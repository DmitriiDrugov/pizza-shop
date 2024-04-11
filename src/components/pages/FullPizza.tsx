import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

interface Pizza {
  id: string;
  imageUrl: string;
  title: string;
  price: number;
  // Add more properties if needed
}
const FullPizza: React.FC = () => {
  const [pizza, setPizza] = useState<Pizza | null>(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get(
          "https://6605b547d92166b2e3c2a3bb.mockapi.io/pizzas/" + id
        );
        setPizza(data);
      } catch (error) {
        alert("PIZZA NOT FOUND :( 404");
        navigate("/");
      }
    }
    fetchData();
  }, []);
  if (!pizza) {
    return "Загрузка...";
  }
  return (
    <div className="container">
      <img src={pizza.imageUrl} />
      <h2>{pizza.title}</h2>
      <p></p>
      <h4>{pizza.price}</h4>
    </div>
  );
};
export default FullPizza;
