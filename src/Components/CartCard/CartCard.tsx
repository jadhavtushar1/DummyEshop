import './CartCard.css'
import crime from '../../Assets/CrimeAndPunishment.jpg'
import star from '../../Assets/star-fill.svg'

const CartCard =()=>{
  return (
        <div className="card-details">
            <div className="image">
                <img src={crime} alt="" />
            </div>
            <div className='desc-parent'>
            <div className="details">
                <h3 className='title'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, </h3>
                <h4 className='desc'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu</h4>
                <div className='rating'>
                    <div className='stars'>
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    </div>
                    <div className='count'></div>
                </div>
                
            </div>
            <div className='action-btns'>
                <button type="button" className="btn btn-secondary btn-1">BUY NOW</button>
                <button type="button" className="btn btn-secondary btn-2">REMOVE FROM CART</button>
                </div>
            </div>
 
</div>
)}
export default CartCard