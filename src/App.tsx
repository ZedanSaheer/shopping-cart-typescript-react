import React , {useState} from 'react';
import { useQuery } from 'react-query';
import { Drawer } from '@material-ui/core';
import { LinearProgress } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import { Badge } from '@material-ui/core';
import { Wrapper , StyledButton} from './App.styles';
import Item from './Components/item/Item/item';
import Cart from './Components/item/Cart/Cart';

//types
export type CartItemType = {
  id:number;
  category:string;
  description:string;
  title:string;
  image:string;
  price:number;
  amount:number;
};

const getProducts = async () : Promise<CartItemType[]> => {
  return await (await fetch('https://fakestoreapi.com/products')).json();
  
}

const App= () => {
  const [cartOpen,setCartOpen] = useState(false);
  const [cartItems,setCartItems] = useState([] as CartItemType[]);
  const {data,isLoading,error} = useQuery<CartItemType[]>('products',getProducts);
  console.log(data);
  const getTotalItems = (items:CartItemType[]) => {
    return items.reduce((ack:number,item)=>ack+item.amount,0);
  };
  const handleAddToCart = (clickedItem:CartItemType) => null;
  const handleRemoveFromCart = () => null;

  if(isLoading) return <LinearProgress/>
  if(error) return <div>Something went wrong!</div>

  return (
    <div className="App">
        <Wrapper>
          <Drawer anchor="right" open={cartOpen} onClose={()=>setCartOpen(false)}>
            <Cart cartItems={cartItems} addToCart={handleAddToCart}
            removeFromCart={handleRemoveFromCart}/>
          </Drawer>
          <StyledButton onClick={()=>setCartOpen(true)}>
            <Badge badgeContent={getTotalItems(cartItems)} color='error'>
              <AddShoppingCart/>
            </Badge>
          </StyledButton>
          <Grid container spacing={3}>
              {data?.map((item)=>{
                return <Grid item key={item.id} xs={12} md={6} sm={4}>
                  <Item item={item} handleAddToCart={handleAddToCart}/>
                </Grid>
              })}
          </Grid>
        </Wrapper>
    </div>
  );
}

export default App;
