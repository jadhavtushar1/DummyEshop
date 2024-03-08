import React, { useEffect, useState } from 'react';
import Card from '../../Components/Card/Card';
import './HomePage.css';
import { useAppDispatch, useAppSelector } from '../../Redux/Hooks/Hooks';
import { getAllData } from '../../Redux/Slices/CardSlice';
import homeState from '../../Redux/Types/HomeState';
import { useSelector } from 'react-redux';
import { authenticateUser } from '../../Redux/Slices/AuthinticateSlice';
import { UserDataFormat } from '../../Redux/Slices/AuthinticateSlice';
import { UserState } from '../../Redux/Slices/AuthinticateSlice';
import Header from '../../Components/Header/Header';


const HomePage : React.FC = ()  =>{
  const dispatch = useAppDispatch();
  const data = useSelector((state : homeState) => state.allData.data);
  const userdata = useSelector((state :UserState ) => state.authData);
  useEffect(() => { 
    dispatch(getAllData()); 
  }, []);

  return (
    <div>
      <Header/>
      <div className='wrapCards cardparent'>
        {data.map((product, index) => (
          <Card key={index} data ={product} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
