import Link from "next/link";
import styled from "styled-components";
import Center from "@/components/Center";
import { useContext } from "react";
import { CartContext } from "./CartContext";



const StyledHeader = styled.header`
    background-color:  purple;
    display:flex;
`;
const Logo = styled(Link)`
    color: #fff;
    text-decoration:none;
    position:relative;
    z-index: 3;
`;
const Wrapper = styled.div`
    display:flex; 
    padding: 10px 0;
`;
const StyledNav = styled.nav`
    display: flex;
    gap:5px;
  background-color:transparent;
  @media screen and (min-width: 768px) {
   gap:15px;
    font-size:1.5rem ;
  }
    

`;

const NavLink = styled(Link)`
    color: #fff;
    font-size:12px;
    font-family: 'Cinzel', serif;
    text-decoration:none;
    margin-right:5px;
    padding:10px 0;
    @media screen and (min-width:768px) {
    padding:0px;
    font-size:1.5rem ;
  }
  transition: all ease-in-out 0.3s;
      &:hover{
        color:#aaa;
      }
`;
const Button = styled.button`

`;

export default function Header() {
    const {cartProducts} = useContext(CartContext);
    return(
     
        <StyledHeader>
            <Center>
                <Wrapper>
            <StyledNav>
                <NavLink href={'/'}>Home</NavLink>
                <NavLink href={'/products'}>Products</NavLink>
                <NavLink href={'/categories'}>Categories</NavLink>
                <NavLink href={'/account'}>Account</NavLink>
                <NavLink href={'/cart'}>Cart ({cartProducts.length})</NavLink>
            </StyledNav>
            </Wrapper>
            </Center>
        </StyledHeader>
     
    );
}