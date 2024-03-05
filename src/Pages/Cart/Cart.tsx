import CartCard from "../../Components/CartCard/CartCard"
import './Cart.css'

export const Cart =()=>{
    return(
        
      <div className="cart-parent">
    {/* //   {Array.from({ length: 10 }, (_, index) => ( */}
        <CartCard  />
    {/* //   ))} */}
      </div>
        
        
    )
}
export default Cart