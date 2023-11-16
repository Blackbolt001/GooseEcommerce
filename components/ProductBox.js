import styled from "styled-components";
import Button from "@/components/Button";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import CartIcon from "../components/icons/CartIcon";
import SearchIcon from "../components/icons/SearchIcon";
import ThumbsUpIcon from "../components/icons/ThumbsUpIcon";

const ProductWrapper = styled.div`
background-color:rgba(199, 199, 199, 0.47);
border-radius:10px;
display:flex;
justify-content:center;
align-items:center;
text-align:center;

`;
const Info = styled.div`
opacity: 0;
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
border-radius:15px;
background-color: rgba(0, 0, 0, 0.5);
z-index: 3;
display: flex;
align-items: center;
justify-content: center;
transition: all 1.5s ease;
cursor: pointer;
`;

const WhiteBox = styled(Link)`
background-color:#fff;
flex: 1;
  margin: 5px;
  border-radius:20px;
  max-width: 250px;
  height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
  position: relative;
  &:hover ${Info}{
    opacity: 1;
  }
`;
const Circle = styled.div`
 width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #000;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
  position: absolute;
`;
const Image = styled.img`
    height:75%;
    z-index:2;
`;
const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color:black;
  background-color: #afb1ba;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 1.0s ease;
  &:hover{
    background-color:#000;
    color:white;
    transform: scale(1.5);
  }
`;
const Title= styled(Link)`
font-weight:normal;
font-size:.9rem;
margin:0;
color:inherit;
text-decoration:none;
`;

const ProductInfoBox = styled.div`
margin-top:5px;
`;
const PriceRow = styled.div`
    display:block;
    @media screen and (min-width: 768px) {
    display: flex;
    gap: 5px;
  }
  align-items: center;
  justify-content:space-between;
  margin-top:2px;
`;
const Price = styled.div`
   font-size: 1rem;
  font-weight:400;
  text-align: right;
  @media screen and (min-width: 768px) {
    font-size: 1.2rem;
    font-weight:600;
    text-align: left;
  }
`;

export default function ProductBox({_id,title,description,price,images}) {
    const {addProduct} = useContext(CartContext);
    const url = '/product/'+_id;
    return (
        <ProductWrapper>
        <WhiteBox href={url}>
            <Circle/>
            <Image src={images?.[0]} alt=""/>
            <Info>
            <Icon>
                <CartIcon/>
            </Icon>
            <Icon>
                <SearchIcon/>
            </Icon>
            <Icon>
                <ThumbsUpIcon/>
            </Icon>
            </Info>
        </WhiteBox>
        <ProductInfoBox>
        <Title href={url}>{title}</Title>
        <PriceRow>
        <Price>
        ${price}
        </Price>
        <Button primary={1} outline={1} onClick={() => addProduct(_id)}>
            Add to cart
        </Button>
        </PriceRow>
        </ProductInfoBox>
        </ProductWrapper>
    );
}