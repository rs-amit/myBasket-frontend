import React from 'react'
import styled from "styled-components"
import Product from '../../../components/Product'
import MoonLoader from "react-spinners/MoonLoader";

const PopularProductsCntainer = styled.div`
   display:grid;
   grid-template-columns:repeat(3, 1fr);
   margin:10px;
   @media screen and (max-width:1500px){
     grid-template-columns:repeat(2, 1fr)
   }
   @media screen and (max-width:960px){
    grid-template-columns:repeat(1, 1fr)
  }
`
const Loader = styled.div`
  border:1px solid black
`

function PopularProducts({limitedEditionProduct, popularProduct, isFetching}) {
  return (
    <>
    {
      isFetching ? ( <Loader> <MoonLoader/> </Loader>) : (
        <PopularProductsCntainer>
            {
                limitedEditionProduct?.map((ProductData)=>{
                    return <Product ProductData={ProductData} popularProduct={popularProduct}/>
                })
            }
        </PopularProductsCntainer>
      )
    }
    </>
  )
}

export default PopularProducts
