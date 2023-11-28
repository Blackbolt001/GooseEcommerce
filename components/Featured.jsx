import styled  from "styled-components";
import  Button from "@/components/Button";
import ButtonLink from "@/components/ButtonLink";
import Center from "./Center";
import CartIcon from "./icons/CartIcon";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import img2 from '../lib/assets/forestSunBackground.png';


const Bg = styled.div`
background-color: #0c0c0cf6;
width:100vw;
align-items:center;
justify-content:center;
overflow:hidden;
display:flex;
height:80vh;
color:#070707;
padding:50px 0;
`;
const Title = styled.h1`
    margin-left:100px;
    text-align:center;
    font-weight:500;
    color: #123566;
    font-size:1.5rem;
    z-index:3;
    opacity:0;
    font-family: 'Cinzel', serif;
    transition: all ease-in-out 1.0s;
    &:hover{
        color: yellow;
        opacity:1;

    }
    @media screen and (min-width: 768px) {
    font-size:3rem;
  }
`;
const Desc = styled.p`
    color:#fff;
    display:flex;
    flex-wrap:wrap;
    width:200px;
    justify-self:center;
    align-self:center;
    font-size:1rem;
    font-family: 'Cinzel', serif;
    @media screen and (min-width: 768px) {
    font-size:1.2rem;
  }
 
`;
const ColumnsWrapper = styled.div`
    overflow: hidden;
    display:flex;
    justify-content:center;
    height:56vh;
    background-color: #293a5f;
    border-radius:10%;
    transition: all ease-in-out 2.0s;
  &:hover{
    background-color: #17171899;
    z-index:-1;
 }
      @media screen and (min-width: 768px) {
    height:600px;
  }
`;
const Column = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    align-items:center;
    text-align:center;
    overflow:hidden;
    background-color: transparent;
    border-radius:10%;
    &:hover{
        z-index:3;
    }
 
   

`;
const Logo = styled.div`
    color: #131212;
    display:flex;
    height:360px;
    width:360px;
    padding:0px 20px;
    text-align:center;
    align-items:center;
    border-radius:50%;
    z-index:1;
    opacity:.8;
    background-color: #f3f4f5;
    font-size:xx-large;
    transition: all ease-out 3.0s;
    &:hover{
        background-color: black;
        z-index:-1;
      }
    @media screen and (min-width: 768px) {
    height:400px;
    max-width:400px;
    background-color:black;
  }
    
`;
const ButtonsWrapper = styled.div`
    display:flex;
    gap:10px;
    margin-top:65px;
    justify-content:space-evenly;

`;
const Image = styled.img`
    height:120px;
    width:120px;
    margin-top:5px;
    display:flex;
    cursor: pointer;
    z-index:1;
    transition: all ease-in-out 2.0s;
    &:hover{
        transform:1.1;
        z-index:2;
        opacity:0;
    }

`;
const Image2 = styled.img`
    height:45vh;
    overflow:hidden;
    width:360px;
    z-index:1;
    position:absolute;
    bottom:255px;
    @media screen and (min-width: 768px) {
    height:70vh;
    width:50vw;
    display:flex;
    border-radius:15%;
    transition: all ease-in-out 2.0s;

  }
  &:hover{
    opacity:0;
    z-index:-1;
    background-color:black;
  }
`;
const Image3 = styled.img`
    position:absolute;
    display:flex;
    opacity:0;
    height:35%;
    width:100%;
    z-index:2;
    border-radius:5%;
    transition: all ease-in-out 3.0s;
    &:hover{
        z-index:3;
        opacity:1;
    }
    @media screen and (min-width: 768px) {
    height:45vh;
    width:50vw;
    transition: all ease-out 3.0s;

  }
`;
const Image4 = styled.img`
  display:flex;
  height:80%;
  opacity:0;
  transition: all ease-in-out 2.0s;
  &:hover{
    opacity:1;
    z-index:2;
   
  }

`;



export default function Featured({product}){
    const {addProduct} = useContext(CartContext);
    function addFeaturedToCart() {
    addProduct(product._id);
    }
    return(
        
        <Bg>
            <Image3 src="https://georgiagoose-next-ecommerce.s3.amazonaws.com/1701192848890.png" alt="ATL Skyline"/>
            <Image2 src ="https://georgiagoose-next-ecommerce.s3.amazonaws.com/1701100110927.png" alt="background"/>
            
            <Center>

                <ColumnsWrapper> 
                <Image src = "https://georgiagoose-next-ecommerce.s3.amazonaws.com/1700614526161.png" alt="goose"/>
                <Image src = "https://georgiagoose-next-ecommerce.s3.amazonaws.com/1700614526161.png" alt="goose"/>
                <Image src = "https://georgiagoose-next-ecommerce.s3.amazonaws.com/1700614526161.png" alt="goose"/>
                <Column>
                <Title>{product.title}</Title>
            <Image4 src = "https://georgiagoose-next-ecommerce.s3.amazonaws.com/1700075277877.png" alt="goose"/>
            </Column>
            </ColumnsWrapper>
            <Column>
            <Desc> {product.description}</Desc>
            </Column>
            <div>
                
            <ButtonsWrapper>
            <ButtonLink href={'/products/'+product._id} outline={1} white={1}>Chimichangas</ButtonLink>
            <Button white={1} onClick={addFeaturedToCart}>
            <CartIcon/>
            add to cart
            </Button>
            </ButtonsWrapper>
            </div>
            </Center>
        </Bg>
    );
}