import styled  from "styled-components";
import  Button from "@/components/Button";
import ButtonLink from "@/components/ButtonLink";
import Center from "./Center";
import CartIcon from "./icons/CartIcon";
import { useContext } from "react";
import { CartContext } from "./CartContext";


const Bg = styled.div`
background-color: #8ad8e9ae;
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
    height:300px;
    width:100%;
    margin:5px;
    justify-content:center;
    align-items:center;
    border-radius:50%;
    position:relative;
    transition: all ease-in-out 1.0s;
      &:hover{
      border-radius: 20%;
      height:400px;
      }
`;
const Column = styled.div`
    display:flex;
    flex-direction:column;
    position:absolute;
    background-color: black;
    border-radius:50%;
   

`;
const Logo = styled.div`
    color: white;
    display:flex;
    padding:0px 20px;
    text-align:center;
    justify-content:center;
    align-items:center;
    border-radius:10%;
    background-color: #123566;
    font-size:xx-large;
    
`
const ButtonsWrapper = styled.div`
    display:flex;
    gap:10px;
    margin-top:25px;
    justify-content:space-evenly;

`;
const Image = styled.img`
    height:120px;
    width:120px;
    z-index:5;
    transition: all ease-in-out 1.0s;
      &:hover{
      opacity:0%;
      }

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
                <iframe width="680" height="635" src="https://www.youtube.com/embed/Pv46HBM8x8c?autoplay=1&mute=1" 
                title="The Sciense behind geeese flying &#39;V&#39; formation"
                 frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                 allowfullscreen>
                 </iframe>
                </Column>
                <Column>
                <Logo>
                <Image src = "https://georgiagoose-next-ecommerce.s3.amazonaws.com/1700614526161.png" alt="goose">
                </Image>Georgia Goose</Logo>
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