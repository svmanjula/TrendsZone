import React, { useContext, useState } from 'react'
import "./CheckoutPage.css"
import Header from '../Components/Header/Header'
import { CartContext } from '../Context/Context'
import { Link } from 'react-router-dom'
import { cartReducer } from '../Context/Reducers'
import{AiOutlinePlus,AiOutlineMinus} from "react-icons/ai"

const CheckoutPage = () => {
 const {state:{cart}, dispatch}  = useContext(CartContext)
 const [qty, setQty] = useState(1)

 console.log(cart)

 const increment =()=>{
     setQty(qty+1)
 }
 const decrement =()=>{
    setQty(qty-1)
}
  return (
    <div>
        <Header/>

        {
            (cart.length == 0 ) ? (

               <div className='cart-container empty-container' >
                   <h3> Your cart is empty.</h3>
                   <p> Check your wishlist for favourite items or <Link to="/product" className='empty-container-link' >continue shopping. </Link> </p>
               </div>
            ):(
            
            
            <div className='cart-container' >
              
        <h2 cart-product-title >Shopping cart ({cart.length} )</h2>

       
 
            <div className='cart-productDetail-container' >
            <div className='cart-products-container' >
{
    cart.map((cartProduct)=>(
           
            <div  key={cartProduct.id} className='cart-product-container'>
             <div>
             <img  className='cart-product-img' src={cartProduct.image}/>
             </div>

             <div className='cart-product-detail' >
             <div>{cartProduct.title} </div>
             <div>${cartProduct.price} </div>

             
             <span className='cart-product-qty-container '>
                 <span >
                     Quantity:
                 </span>
                 {
                     (qty === 1) ? <button type="disable"  className='cart-product-qty decrement disable' ><AiOutlineMinus/> </button>:(
                        <button   className='cart-product-qty decrement' onClick ={()=>decrement() } ><AiOutlineMinus/> </button>
                     )
                 }
                
                 <span className='cart-product-qty' >{qty} </span>
                 <button className='cart-product-qty increment' onClick ={ cart.find((prod)=> prod.id == cartProduct.id) && (()=> increment()) } > <AiOutlinePlus/> </button>
                
             </span>
             <div className='cart-product-button ' >
             <button onClick ={()=>{
                 dispatch({
                         type:"REMOVE_FROM_CART",
                         payload:cartProduct,
                     
                 })
             }} >Remove from cart </button>
             <button onClick ={()=>{
                 dispatch({
                     type:"ADD_TO_WISHLIST",
                     payload:cartProduct,

                 })

                 
             }}
             >Move to wislist </button>
             </div>

             
             
             </div>
             


            </div>
            
    ))
}

</div>            

              
               <div className='price-details-container' >
           
                 <h3>Price Details</h3>
                 <hr/>
                 <div >
                 <div className='price-details'>
                 <span>Price ({cart.length} items) </span>
                 <span> ${cart.length} </span>
                 </div>
                
                 <div className='price-details'>
                 <span>Delivery charges </span>
                 <span>Free </span>
                 </div>

                 <hr/>
                 <div className='price-details'>
                 <span> Total Amount</span>
                 <span> ${(cart.length)} </span>
                 </div>
                 </div>
                 <hr/>
                 <div className='cart-product-button  checkout-button'>
                 <button >Checkout</button>
                 </div>
                 </div>
                 
               
            
                 </div>
            </div>  
            )}

        </div>
        
   
  )
}

export default CheckoutPage