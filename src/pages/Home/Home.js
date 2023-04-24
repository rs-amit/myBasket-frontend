import React,{useEffect, useState} from 'react'
import styled from "styled-components"
import Slider from '../../components/Slider'
import {bannerList, popularProductsData} from "./components/const"
import { PublicRequest } from "../../api/Api";
import PopularProducts from './components/PopularProducts'
import Footer from '../../components/Footer';
import Header from '../../components/Header'
import Announcement from '../../components/Announcement';

const Container = styled.div`
  position:relative;
`


function Home() {
  const [limitedEditionProduct, setLimitedEditionProduct] = useState()
  const [isFetching, setIsFetching] = useState(false)

  const GetLimitedEditionProduct = async() =>{
      setIsFetching(true)
      let params = {};
      params.category = "limitedEdition";
      await PublicRequest.get("/product", {
        params
      }).then((response)=>{
        setLimitedEditionProduct(response.data.products);
        console.log(response.data.products)
      }).catch((error)=>{
         console.log(error)
      }).finally(()=>{
        setIsFetching(false);
      })   
  }

  useEffect(()=>{
    GetLimitedEditionProduct()
  },[])

  return (
    <>
    <Header/>
    <Announcement
      offerMessage="Super Deal! Free Shopping on Order Over $100"
      bgColor="#003044"
      textColor="white"
    />
    <Container>
      <Slider bannerList={bannerList}/>
      {/* <Categories categoryList={categoryList}/> */}
      <PopularProducts 
        limitedEditionProduct={limitedEditionProduct} 
        isFetching={isFetching}
        popularProduct = "show"/>
    </Container>
    <Footer/>
    </>
  )
}

export default Home;
