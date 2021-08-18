import { React, useState, useEffect } from "react";
import ItemList from "./ItemList";
import { AllProducts } from "../helpers/AllProducts";
import "bootstrap/dist/css/bootstrap.min.css";

function ItemListContainer(props) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    try {
      const res = await AllProducts();
      setItems(res);
    } catch (err) {
      console.log("Error al cargar los productos: ", err);
    }
  };

  return (
    <div className="fs-2 text-center ">
      <ItemList className="" items={items} />
    </div>
  );
}

export default ItemListContainer;
