import { useEffect, useState } from "react"
import { useNavigate , useLocation } from "react-router-dom"
import './Product.css'

interface ProductData {
    images: string[];
    title: string,
    description: string,
    price: number,
    brand: string,
  }

  interface imagetype {
    image:string
  }
const Product = ()=>{
    const [productData, setProdData] = useState<ProductData | null>(null);
    const [mainImage,setMainImage] = useState<imagetype |null>(null)
    const location = useLocation()
    const data : any = location.state
    console.log(productData?.images)
    useEffect(()=>{
        if(data){
            setProdData(data.data)
            if (data.data.images.length > 0) {
                setMainImage({ image: data.data.images[0] });
            }
        }
       
    },[])

    const handleImageClick = (index: number) => {
        if (productData && productData.images.length > index) {
            setMainImage({ image: productData.images[index] });
        }
    };

    return(
        
        <div className="product-details-parent">
            <div className="image-parent">
                <div className="carousel-img">
                {productData?.images.map((image, index) => (
                        <img src={image} key={index}onClick={()=>handleImageClick(index)} className="main-image"></img>
                ))}  
                </div>
                <img src={mainImage?.image} className="main-image focused-image"></img>
            </div>
            <div className="details-parent">
                    <div className="d-flex">
                        <h2>{productData?.title} </h2>
                    </div>
                    

                    <h5>{productData?.description}</h5>
                    <h3>${productData?.price} </h3>
                    
                    <div className='actions-btns'>
      <button type="button" className="btn btn-primary cardbtn">Buy</button>
      <button type="button" className="btn  btn-info cardbtn">Add to Cart</button>
       </div>
            </div>

        </div>
        
    )
}
export default Product