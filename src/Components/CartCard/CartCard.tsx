import './CartCard.css'
import crime from '../../Assets/CrimeAndPunishment.jpg'
import star from '../../Assets/star-fill.svg'
import React from 'react'
interface product {
    data: {
        id: number;
        title: string;
        description: string;
        price: number;
        discountPercentage: number;
        rating: number;
        stock: number;
        brand: string;
        category: string;
        thumbnail: string;
        images: string[];
        cartItemId?: number; // Set data prop to any type
      };
}
const CartCard :  React.FC<product> =({data})=>{
  return (
        <div className="card-details">
            <div className="image">
                <img src={data.thumbnail} alt="" />
            </div>
            <div className='desc-parent'>
            <div className="details">
                <h3 className='title'> {data.title} </h3>
                <h4 className='desc'> {data.description}</h4>
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