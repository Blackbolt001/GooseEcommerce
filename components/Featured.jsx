import styled  from "styled-components";
import  Button from "@/components/Button";
import ButtonLink from "@/components/ButtonLink";
import Center from "./Center";
import CartIcon from "./icons/CartIcon";
import { useContext } from "react";
import { CartContext } from "./CartContext";


const Bg = styled.div`
background-color: #222;
width:100vw;
height:50vh;
color:#fff;
padding:50px 0;
`;
const Title = styled.h1`
    margin:0;
    text-align:center;
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
    display:flex;
 
`;
const ColumnsWrapper = styled.div`
    overflow: hidden;
    display:flex;
    height:480px;
    width:100%;
    position:relative;
    transition: all ease-in-out 1.0s;
      &:hover{
      border-radius: 0%;
      }
`;
const Column = styled.div`
    display:flex;
    justify-content:center;
    position:absolute;
   

`;
const Logo = styled.div`
    color: #e02b9b6c;
    font-size:xx-large;
    
`
const ButtonsWrapper = styled.div`
    display:flex;
    gap:10px;
    margin-top:25px;
    justify-content:space-evenly;

`;
const Image = styled.img`
    height:180px;
    width:180px;
    z-index:5;

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
                <iframe width="680" height="380" src="https://www.youtube.com/embed/MH25QHJ6auY?autoplay=1&mute=1"
                 title="Covington Square &amp; Historic Courthouse  DJI Phantom"
                  frameborder="0" 
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen>
                </iframe>
                </Column>
                <Column>
                <Image src = "https://georgiagoose-next-ecommerce.s3.amazonaws.com/1700614526161.png" alt="goose">
                </Image>
                <Logo>Georgia Goose</Logo>
                </Column>
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
            </ColumnsWrapper>
            </Center>
        </Bg>
    );
}