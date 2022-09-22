import React, { useState } from 'react'
import Layout from '../components/Layout'
import Button from 'react-bootstrap/Button';


function Payment() {

  const [amount, setamount] = useState("")
       

  const handleSubmit= e=>{
      e.preventDefault()
      if(amount===""){
      alert("Please enter Amount")
      } else{
          var options={
              key:"rzp_test_n6eWkNdzEHniLu",
              key_secret:"P12l1uORv4bno8uPuyaCByw7",
              amount:amount*100,
              currency:"INR",
              name:"Siddarth Hire",
              description:"Payment for Rent",
              
              prefill:{
                  name:"Siddarth",
                  email:"Siddarth@siddarth.com",
                  contact:"7904965322"
              },
              notes:{
                  address:"Siddarth Hire Office"
              },
              theme:{
                  color:"#3399cc"
              }

          }
          var pay= new window.Razorpay(options)
          pay.open()
      }
  }
  
  return (

<Layout>
<div className="payment">

            <h2> Razor pay </h2>
           
           
            <input className='box' type="text" placeholder='Enter Amount' value={amount} onChange={(e) => setamount(e.target.value)}></input> 

            <Button onClick={handleSubmit} variant="primary">Pay</Button>
            
        </div>

</Layout>


 )
}

export default Payment