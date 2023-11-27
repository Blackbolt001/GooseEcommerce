import Link from "next/link";
import styled from "styled-components";
import Center from "@/components/Center";
import { useContext } from "react";
import { CartContext } from "./CartContext";



const StyledHeader = styled.header`
    background-color: #123566;
    display:flex;
    border-radius:5px;
`;
const Logo = styled(Link)`
    color: #fff;
    text-decoration:none;
    position:relative;
    z-index: 3;
`;
const Wrapper = styled.div`
    display:flex; 
    flex-wrap:wrap;
    justify-content:space-between;
    padding: 20px 0;
`;
const StyledNav = styled.nav`
    display: flex;
    gap:15px;
  background-color:transparent;
    

`;

const NavLink = styled(Link)`
    display:block;
    color: white;
    font-size:1rem;
    font-family: 'Cinzel', serif;
    text-decoration:none;
    padding: 10px 0;
    @media screen and (min-width: 768px) {
    padding:0;
    font-size:2rem ;
  }
  transition: all ease-in-out 0.3s;
      &:hover{
        color:blue;
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