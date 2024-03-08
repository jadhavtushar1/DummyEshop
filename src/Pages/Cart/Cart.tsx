import CartCard from "../../Components/CartCard/CartCard"
import Header from "../../Components/Header/Header"
import './Cart.css'
import { useSelector } from "react-redux"

export const Cart =()=>{
  const data = useSelector((state : any) => state.cartData.data )
    return(
      <div>
        <Header/>
        <div className="cart-parent">
        {data.map((product : any,) => (
          <CartCard data = {product}  />
        ))}
        
      </div>
      </div>
      
        
        
    )
}
export default Cart