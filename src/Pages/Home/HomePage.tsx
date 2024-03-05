import React, { useEffect, useState } from 'react';
import Card from '../../Components/Card/Card';
import './HomePage.css';
import { useAppDispatch, useAppSelector } from '../../Redux/Hooks/Hooks';
import { getAllData } from '../../Redux/Slices/CardSlice';

const HomePage : React.FC = ()  =>{
  const dispatch = useAppDispatch();
  const data: any = useAppSelector(state => state.alldata.data);
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    dispatch(getAllData()); 
  }, []);

  useEffect(() => {
    if (data && data.products && data.products.length > 0) {
      setProducts(data.products);
    }
  }, [data]);

  return (
    <div>
      <div className='wrapCards cardparent'>
        {products.map((product, index) => (
          <Card key={index} data ={product} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
