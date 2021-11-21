import { Button } from "@material-ui/core";
import { FC } from "react";

import { CartItemType } from "../../../App";

import { Wrapper } from "./item.styles";

type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
};

const Item: FC<Props> = ({ item, handleAddToCart }) => (
  <Wrapper>
    <img src={item.image} alt={item.title} />
    <div>
      <h3>{item.title}</h3>
      <p className="desc">{item.description}</p>
    </div>
    <h3 className="price">${item.price}</h3>
    <Button onClick={() => handleAddToCart(item)}>Add to cart</Button>
  </Wrapper>
);

export default Item;
