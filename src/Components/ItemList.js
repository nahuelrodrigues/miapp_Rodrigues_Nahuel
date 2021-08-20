import Item from "./Item";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";

function addItem({ id, price, title, pictureUrl, category, stock }, index) {
  return (
    <div className="">
      <Item
        key={index}
        id={id}
        title={title}
        price={price}
        pictureUrl={pictureUrl}
        category={category}
        stock={stock}
      />
    </div>
  );
}

function ItemList({ items }) {
  const { categoryId } = useParams();
  return categoryId
    ? items
        .filter((products) => products.category == categoryId)
        .map((products) => addItem(products))
    : items.map((products) => addItem(products));
}

export default ItemList;
