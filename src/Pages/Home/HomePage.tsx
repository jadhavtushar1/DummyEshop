import React, { useEffect, useState } from 'react';
import Card from '../../Components/Card/Card';
import './HomePage.css';
import { useAppDispatch, useAppSelector } from '../../Redux/Hooks/Hooks';
import { getAllData } from '../../Redux/Slices/CardSlice';
import homeState from '../../Redux/Types/HomeState';
import { useSelector } from 'react-redux';

const HomePage : React.FC = ()  =>{
  const dispatch = useAppDispatch();
  const data = useSelector((state : homeState) => state.allData.data);
  
  useEffect(() => { 
    dispatch(getAllData()); 
  }, []);

  return (
    <div>
      <div className='wrapCards cardparent'>
        {data.map((product, index) => (
          <Card key={index} data ={product} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
