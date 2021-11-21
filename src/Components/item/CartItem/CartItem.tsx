import { Button } from "@material-ui/core";
import { FC } from "react";
import { CartItemType } from "../../../App";
import { Wrapper } from "../CartItem/CartItem.styles";

type Props = {
    item : CartItemType;
    addToCart : (clickItem:CartItemType)=>void;
    removeFromCart : (id:number)=>void
}

const CartItem : FC<Props> = () => <div>Cart Item</div>;

export default CartItem;