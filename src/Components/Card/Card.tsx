import React from 'react'
import crime from '../../Assets/CrimeAndPunishment.jpg'
import './Card.css'
import { useNavigate } from 'react-router-dom'
interface CardProps {
  data: any; // Set data prop to any type
}

const  Card : React.FC<CardProps> = ({data}) => {
  const navigate = useNavigate()

  const handleCardClick = ()=>{
    navigate('/Product',{state:{data}})
  }
  return (
    <div>
      <div className="card card-parent" onClick={()=>handleCardClick()}>
        <div className='image-parent'> 
      <img src={data?.images[0]} className="card-img-top card-image" alt="..."/>
        </div>
      <div className="card-body">
      <h6 className="card-text title-text">{data?.title}</h6>
        <p className="card-text">{data?.description}</p>
      </div>
      <div className='actions-btns'>
      <button type="button" className="btn btn-primary cardbtn">Buy</button>
      <button type="button" className="btn  btn-info cardbtn">Add to Cart</button>
       </div>
    </div>
    </div>
  )
}

export default Card