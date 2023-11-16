import styled  from "styled-components";
import  Button from "@/components/Button";
import ButtonLink from "@/components/ButtonLink";
import Center from "./Center";
import CartIcon from "./icons/CartIcon";
import { useContext } from "react";
import { CartContext } from "./CartContext";


const Bg = styled.div`
background-color: #222;
color:#fff;
padding:50px 0;
`;
const Title = styled.h1`
    margin:0;
    font-weight:500;
    color:lightyellow;
    font-size:1.5rem;
    font-family: 'Cinzel', serif;
    @media screen and (min-width: 768px) {
    font-size:3rem;
  }
`;
const Desc = styled.p`
    color:#aaa;
    font-size:.8rem;
    font-family: 'Cinzel', serif;
`;
const ColumnsWrapper = styled.div`
    display:flex-grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap:40px;
   
`;
const Column = styled.div`
    display:flex;
    align-items:center;
    flex-direction:column;
`;
const ButtonsWrapper = styled.div`
    display:flex;
    gap:10px;
    margin-top:25px;

`;
const Image = styled.img`
    max-width:100%;
`;


export default function Featured({product}){
    const {addProduct} = useContext(CartContext);
    function addFeaturedToCart() {
    addProduct(product._id);
    }
    return(
        <Bg>
            <Center>
                <ColumnsWrapper>
                    <Column> 
                    <Image src = "https://georgiagoose-next-ecommerce.s3.amazonaws.com/1700075277877.png" alt="deadpool"/>

                    <div>
            <Title>{product.title}</Title>
            <Desc> {product.description}</Desc>
            <ButtonsWrapper>
            <ButtonLink href={'/products/'+product._id} outline={1} white={1}>Chimichangas</ButtonLink>
            <Button white={1} onClick={addFeaturedToCart}>
            <CartIcon/>
            add to cart
            </Button>
            </ButtonsWrapper>
            </div>
            </Column>
            </ColumnsWrapper>
            </Center>
        </Bg>
    );
}