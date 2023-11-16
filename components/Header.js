import Link from "next/link";
import styled from "styled-components";
import Center from "@/components/Center";
import { useContext } from "react";
import { CartContext } from "./CartContext";



const StyledHeader = styled.header`
    background-color: #222;
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
  background-color: #222;
    

`;

const NavLink = styled(Link)`
    display:block;
    color:#aaa;
    text-decoration:none;
    padding: 10px 0;
    @media screen and (min-width: 768px) {
    padding:0;
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