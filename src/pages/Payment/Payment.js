import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import styled from "styled-components";
import logo from "../../asserts/noline.png"

const PaymentContainer = styled.div`
   height:calc(100vh - 87px);
   display:flex;
   justify-content:center;
   align-items:center;
`

const KEY = "pk_test_51MvdiPSBgvBmTMe9cMhJGOV5OwRZmKbeKczr3cU8GvnzfFaeHWXt9EyoD4qaXHNMo9hL8hWixBuSTL9t3YwB3IW900OmxnotaD"


function Payment() {

   const onToken = (token)=>{
     console.log(token)
   }

  return (
    <PaymentContainer>
        <StripeCheckout
           name = "My Bazaar"
           image={logo}
           billingAddress
           shippingAddress
           description='your total amount is 2200 INR'
           amount={200}
           stripeKey={KEY}
           token={onToken}
        >
        <button 
          style={{
              border:"none",
              width:120,
              borderRadius: 5,
              padding: "20px",
              backgroundColor: "black",
              color: "white",
              fontWeight: "600",
              cursor: "pointer"
          }}
        > PAY NOW </button>
        </StripeCheckout>
      
    </PaymentContainer>
  )
}

export default Payment
