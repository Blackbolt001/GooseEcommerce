import Button from "@/components/Button";
import Center from "@/components/Center";
import Header from "@/components/Header";
import styled from "styled-components";

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

export default function CartPage() {
    return (
        <>
        <Header/>
        <Center>
        <ColumnsWrapper>
        <Box>1</Box>
        <Box>
            <h2> Order Information </h2>
            <Button>Continue to Payment</Button>
        </Box>
        </ColumnsWrapper>
        </Center>
        </>
    )
}