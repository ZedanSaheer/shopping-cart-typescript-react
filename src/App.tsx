import React , {useState} from 'react';
import { useQuery } from 'react-query';
import { Drawer } from '@material-ui/core';
import { LinearProgress } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import { Badge } from '@material-ui/core';
import { wrapper } from './App.styles';

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
  const {data,isLoading,error} = useQuery<CartItemType[]>('products',getProducts);
  console.log(data);
  return (
    <div className="App">

    </div>
  );
}

export default App;
