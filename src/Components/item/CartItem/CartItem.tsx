import { Button } from "@material-ui/core";
import { FC } from "react";
import { CartItemType } from "../../../App";
import { Wrapper } from "../CartItem/CartItem.styles";
import Item from "../Item/item";

type Props = {
    item : CartItemType;
    addToCart : (clickItem:CartItemType)=>void;
    removeFromCart : (id:number)=>void
}

const CartItem : FC<Props> = ({item,addToCart,removeFromCart}) => (
    <Wrapper>
        <div>
            <h3>{item.title}</h3>
            <div className="info">
                <p>Price : ${item.price}</p>
                <p>Total : ${(item.amount+item.price).toFixed(2)}</p>
            </div>
            <div className="btn">
                <Button
                size="small"
                disableElevation
                variant="contained"
                onClick={()=>removeFromCart(item.id)}> 
                -
                </Button>
                <p>{item.amount}</p>
                <Button
                size="small"
                disableElevation
                variant="contained"
                onClick={()=>addToCart(item)}>
                   + 
                </Button>
            </div>
        </div>
        <img src={item.image} alt={item.title} />
    </Wrapper>
)
export default CartItem;