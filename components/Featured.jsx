import styled  from "styled-components";
import  Button from "@/components/Button";
import ButtonLink from "@/components/ButtonLink";
import Center from "./Center";
import CartIcon from "./icons/CartIcon";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import img2 from '../lib/assets/forestSunBackground.png';


const Bg = styled.div`
background-color: #a3d8dfac;
width:100vw;
align-items:center;
justify-content:center;
display:flex;
height:80vh;
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
    height:800px;
    width:400px;
    border-radius:20%;
    overflow:hidden;
    justify-content:center;
    align-items:center;
    position:relative;
    transition: all ease-in-out 2.0s;
      &:hover{
      border-radius: 50%;
      height:400px;
      width:400px;
      }
      @media screen and (min-width: 768px) {
    height:660px;
    width:800px;
  }
`;
const Column = styled.div`
    display:flex;
    flex-direction:column;
    position:absolute;
    width:100%;
    overflow:hidden;
    background-color: #7be4e7;
    border-radius:10%;
 
   

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
    @media screen and (min-width: 768px) {
    height:400px;
    max-width:400px;
  }
    
`;
const ButtonsWrapper = styled.div`
    display:flex;
    gap:10px;
    margin-top:25px;
    justify-content:space-evenly;

`;
const Image = styled.img`
    height:120px;
    width:120px;
    z-index:3;
    display:flex;
    
    cursor: pointer;
    transition: all ease-in-out 1.0s;
      &:hover{
      opacity:0%;
      }

`;
const Image2 = styled.img`
    height:45vh;
    overflow:hidden;
    width:360px;
    border-radius:10%;
    z-index:1;
    position:absolute;
    bottom:230px;
    @media screen and (min-width: 768px) {
    height:60%;
    width:40%;
  }
`;



export default function Featured({product}){
    const {addProduct} = useContext(CartContext);
    function addFeaturedToCart() {
    addProduct(product._id);
    }
    return(
        
        <Bg>
            <Image2 src ="https://georgiagoose-next-ecommerce.s3.amazonaws.com/1701100110927.png" alt="background"/>
            <Center>
                <ColumnsWrapper> 
                 <Column>
                 <iframe width="1248" height="702" src="https://www.youtube.com/embed/yHtoPuXgc_8?autoplay=1&mute=1" 
                 title="Canada geese flying and honking loud sounds" 
                 frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen></iframe>

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