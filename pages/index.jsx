import Featured from "@/components/Featured";
import Header from "@/components/Header";
import {Product} from "@/models/Product";
import {mongooseConnect} from "@/lib/mongoose";
import NewProducts from "@/components/NewProducts";
import styled from "styled-components";

const Container = styled.div`
  width:100%;
  overflow-x:hidden;
`;

export default function HomePage({featuredProduct,newProducts}){
 
  return(
      <Container>
      <Header/>
      <Featured product={featuredProduct}/>
      <NewProducts products={newProducts}/>
      </Container>

  );
}

export async function getServerSideProps(){
 const featuredProductId = '65551729bff818314843d820';
 await mongooseConnect();
 const featuredProduct = await Product.findById(featuredProductId);
 const newProducts = await Product.find({}, null, {sort: {'_id':-1}, limit:20});
 return {
  props: {
    featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
    newProducts: JSON.parse(JSON.stringify(newProducts)),
  },
 };
}
