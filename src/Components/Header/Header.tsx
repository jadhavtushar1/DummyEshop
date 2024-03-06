import React, { useState } from 'react'
import './Header.css'
import bag from '../../Assets/bag.svg'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../Redux/Hooks/Hooks';
import { getAllData } from '../../Redux/Slices/CardSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
function Header() {
  const [searchText,setSearchTet] = useState<any>()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const count = useSelector((state :any) =>state.cartData.count)
  const handleTitleCick =async () =>{
    
    navigate('/')
  }
  const handleCartClick =()=>{
    navigate('/Cart')
  }

  const handlesearchBox = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const query = (event.target as HTMLInputElement).value;
    setSearchTet(query)
    if (event.key === 'Enter') {
        handlesearchClick(query);
    }
}

  const handlesearchClick =async (query : string)=>{
    await dispatch(getAllData(query))
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-header">
  <div className="container-fluid">
    <a className="navbar-brand" href="#" onClick={()=>handleTitleCick()}>STORE</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <div className="d-flex">
        <input  className="form-control me-2 serchbar" type="search" placeholder="search for products (do not click on buy now)" onKeyDown={(e) => handlesearchBox(e)} aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit" onClick={()=>handlesearchClick(searchText)}>Search</button>
      </div>
      <div className='cart-container'>
        <div className='cart-count'>{count}</div>
      <img className='cart-image' src={bag} alt="bag" onClick={()=>handleCartClick()}/>
      </div>
      

    </div>
  </div>
</nav>
    </div>
  )
}

export default Header