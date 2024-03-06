import CartCard from "../../Components/CartCard/CartCard"
import './Cart.css'
import { useSelector } from "react-redux"

export const Cart =()=>{
  const data = useSelector((state : any) => state.cartData.data )
  console.log(data)
    return(
        
      <div className="cart-parent">
        {data.map((product : any,) => (
          <CartCard data = {product}  />
        ))}
        
      </div>
        
        
    )
}
export default Cart