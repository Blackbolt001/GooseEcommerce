import Button from "@/components/Button";
import { CartContext } from "@/components/CartContext";
import Center from "@/components/Center";
import Header from "@/components/Header";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const ColumnsWrapper = styled.div`
   display: grid;
  grid-template-columns: 1fr;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1.2fr .8fr;
  }
  gap: 40px;
  margin-top: 40px;
`;

const Box = styled.div`
    background-color:#fff;
    border-radius:10px;
    padding:30px;
`;

export default function CartPage() {
    const {cartProducts} = useContext(CartContext);
    const [products,setProducts] = useState([]);

    useEffect(() => {
        if (cartProducts.length > 0) {
          axios.post('/api/cart', {ids:cartProducts})
            .then(response => {
              setProducts(response.data);
            })
        }
      }, [cartProducts]);

    return (
        <>
        <Header/>
        <Center>
        <ColumnsWrapper>
        <Box>
          
            {!cartProducts?.length && (
                <div>Your cart is empty</div>
            )}
            {products?.length > 0 && (
              <>
              <h2>Cart</h2>
              {products.map(product => (
                
                <div key={product._id}>{product.title}</div>
              ))}
              </>  
            )}
        </Box>
        {!!cartProducts?.length && (
        <Box>
        <input type="text" placeholder="address"/>
        <input type="text" placeholder="address 2"/>
        <h2> Order Information </h2>
        <Button black={'true'} size={'l'} block={'true'}>Continue to Payment</Button>
        </Box>
        )}
      
        </ColumnsWrapper>
        </Center>
        </>
    )
}