import axios from "axios";
import { useState } from "react";

export const useGetItems = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const callAPI = () => {
    axios
    .get("https://6489b61b5fa58521cab01a3f.mockapi.io/products")
    .then((response) => {
      setProducts(response.data);
      setIsLoading(false);
    })
    .catch((error) => {
      console.log(error);
    });
  };

  return { isLoading, products, callAPI };
};
