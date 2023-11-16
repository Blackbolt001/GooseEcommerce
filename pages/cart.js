import Button from "@/components/Button";
import { CartContext } from "@/components/CartContext";
import Center from "@/components/Center";
import Header from "@/components/Header";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Table from "@/components/Table";
import Input from "@/components/Input";
import PlusIcon from "@/components/icons/PlusIcon";
import MinusIcon from "@/components/icons/MinusIcon";

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
const ProductInfoCell = styled.td`
  padding: 10px 0;
  background-color:black;
  border-radius:15px;
  display:flex;
  align-items:center;
  color:white;
`;

const ProductImageBox = styled.div`
  width: 100px;
  height: 120px;
  padding: 2px;
  display:flex;
  border: 1px solid rgba(0, 0, 0, 0.1);
  align-items: center;
  justify-content: center;
  border-radius: 10px;
 
  @media screen and (min-width: 768px) {
    padding: 10px;
    width: 80px;
    height: 80px;
    
  }
`;
const QuantityLabel = styled.span`
  padding: 0 15px;
  font-size:1.0rem;
 
`;
const Image = styled.img`
 height:80%;
 z-index:2;
`;
const CityHolder = styled.div`
  display:flex;
  gap: 5px;
`;

export default function CartPage() {
    const {cartProducts,addProduct,removeProduct} = useContext(CartContext);
    const [products,setProducts] = useState([]);
    const [name,setNames] = useState('');
    const [email,setEmail] = useState('');
    const [city,setCity] = useState('');
    const [postalCode,setPostalCode] = useState('');
    const [streetAddress,setStreetAddress] = useState('');
    const [country,setCountry] = useState('');

    useEffect(() => {
        if (cartProducts.length > 0) {
          axios.post('/api/cart', {ids:cartProducts})
            .then(response => {
              setProducts(response.data);
            })
        } else {
          setProducts([]);
        }
      }, [cartProducts]);

      function moreOfThisProduct(id) {
        addProduct(id);
      }
function lessOfThisProduct(id) {
    removeProduct(id);
}
let total = 0;
for (const productId of cartProducts) {
  const price = products.find(p => p._id === productId)?.price || 0;
  total += price;
}
    return (
        <>
        <Header/>
        <Center>
        <ColumnsWrapper>
        <Box>
        <h2>Cart</h2>
            {!cartProducts?.length && (
                <div>Your cart is empty</div>
            )}
                {products?.length > 0 && (
            <Table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
              {products.map(product => (
                <tr key={product._id}>
                  <ProductInfoCell>
                    <ProductImageBox>
                  <Image src ={product.images[0]} alt=""/>
                  </ProductImageBox>
                 {product.title} 
                 </ProductInfoCell>
                 <td>
                 <Button onClick={() => moreOfThisProduct(product._id)}>
                    <PlusIcon/>
                    </Button>   
                  <QuantityLabel>
                  {cartProducts.filter(id => id === product._id).length}
                  </QuantityLabel>   
                  <Button onClick={() => lessOfThisProduct(product._id)}>
                    <MinusIcon/>
                  </Button> 
                 </td> 
                 <td>
                  <h2>${cartProducts.filter(id => id === product._id).length * product.price}</h2></td>
                </tr>
              ))}
              <tr>
                <td><h1>Total</h1></td>
                <td></td>
                <td><h2>${total}</h2></td>
              </tr>
              </tbody>
            </Table>
         )}
        </Box>
        {!!cartProducts?.length && (
        <Box>
          <h2>Order Information</h2>
        <Input type="text"
         placeholder="Name"
         value={name}
         name="name"
        onChange={ev => setName(ev.target.value)}/>
        <Input type="text"
         placeholder="Email"
         value={email}
         name="email"
         onChange={ev => setEmail(ev.target.value)}/>
         <CityHolder>
         <Input type="text"
                       placeholder="City"
                       value={city}
                       name="city"
                       onChange={ev => setCity(ev.target.value)}/>
                <Input type="text"
                       placeholder="Postal Code"
                       value={postalCode}
                       name="postalCode"
                       onChange={ev => setPostalCode(ev.target.value)}/>
         </CityHolder>
         <Input type="text"
                     placeholder="Street Address"
                     value={streetAddress}
                     name="streetAddress"
                     onChange={ev => setStreetAddress(ev.target.value)}/>
              <Input type="text"
                     placeholder="Country"
                     value={country}
                     name="country"
                     onChange={ev => setCountry(ev.target.value)}/>
        <Button black={'true'} size={'l'} block={'true'} type="submit">Continue to Payment</Button>
        </Box>
        )}
      
        </ColumnsWrapper>
        </Center>
        </>
    )
}