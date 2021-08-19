import React, { useState } from "react";

function Item({ name, category }) {
  const [isAdded, setIsAdded] = useState(false)

  function handleClick() {
    setIsAdded((isAdded) => !isAdded)
  }


  return (
    <li className={isAdded ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={isAdded ? "remove" : "add"} onClick={handleClick} >{isAdded ? "Remove From" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
