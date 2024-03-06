import { useEffect, useState } from "react"
import { useNavigate , useLocation } from "react-router-dom"
import './Product.css'
import { useDispatch } from "react-redux"
import { addToCart } from "../../Redux/Slices/CartSlice"
interface ProductData {
    images: string[];
    title: string,
    description: string,
    price: number,
    brand: string,
  }

  interface CardProps {
    
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

  }

  interface imagetype {
    image:string
  }
const Product = ()=>{
    const [productData, setProdData] = useState<CardProps | null>(null);
    const [mainImage,setMainImage] = useState<string | null>()
    const location = useLocation()
    const dispatch = useDispatch()
    useEffect(()=>{
        if(location?.state?.data){
            setProdData(location.state.data)
            setMainImage(location.state.data.thumbnail)
            // if (data.data.images.length > 0) {
            //     setMainImage({ image: data.data.images[0] });
            // }
        }
       
    },[])
    useEffect(()=>{
        console.log(mainImage)
    },[mainImage])

    const handleImageClick = (index: number) => {
        console.log(index)
        if (productData) {
            setMainImage(productData.images[index]);
        }
    };
    const handleCartClick = ()=>{
        if(productData){
            dispatch(addToCart(productData))
        }
        
    }
    return(
        
        <div className="product-details-parent">
            <div className="image-parent">
                <div className="carousel-img">
                {productData?.images.map((image, index) => (
                        <img src={image} key={index}onClick={()=>handleImageClick(index)} className="main-image"></img>
                ))}  
                </div>
                <img src={mainImage ?? undefined} className="main-image focused-image" alt="Product image"></img>

            </div>
            <div className="details-parent">
                    <div className="d-flex">
                        <h2>{productData?.title} </h2>
                    </div>
                    

                    <h5>{productData?.description}</h5>
                    <h3>${productData?.price} </h3>
                    
                    <div className='actions-btns'>
      <button type="button" className="btn btn-primary cardbtn">Buy Now</button>
      <button type="button" className="btn  btn-info cardbtn" onClick={()=>handleCartClick()}>Add to Cart</button>
       </div>
            </div>

        </div>
    )
}
export default Product