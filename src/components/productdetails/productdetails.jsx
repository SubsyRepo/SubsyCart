import React, { useState, useEffect }from 'react';
import { useParams } from 'react-router-dom';
import Header from '../header/header';
import Footer from '../footer/footer';
import star from '../../images/star.png';
import '../productdetails/productdetails.css';


const ProductDetails = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const params = useParams();
    const [slideUrl1, setSlideUrl1] = useState('');
    const [slideUrl2, setSlideUrl2] = useState('');
    const [slideUrl3, setSlideUrl3] = useState('');

    useEffect(() => {
        fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((json) => {
            setProducts(json.products);
        });
    }, []);

  useEffect(() => {
    if (products.length !== 0) {
      const filteredProd = products.filter((item) => item.title === params.id);
      if (filteredProd !== undefined) {
        setSlideUrl1(filteredProd[0].images[0]);
        setSlideUrl2(filteredProd[0].images[1]);
        setSlideUrl3(filteredProd[0].images[2]);
      }
      setFilteredProducts(filteredProd);
    }
}, [products, params.id]);

    return(
        <div>
            <Header />
            <div className='product-details'>
            {filteredProducts.map((item, index) => (
            <div>
            <div id="carouselExampleCaptions" className="carousel slide">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
                <div className="carousel-inner">
                    <div className='carousel-item active'>
                        <img src={slideUrl1} className="d-block slide-image-1" alt="..."/>
                    </div>
                    <div className='carousel-item'>
                        <img src={slideUrl2} className="d-block slide-image-2" alt="..."/>
                    </div>
                    <div className='carousel-item'>
                        <img src={slideUrl3} className="d-block slide-image-3" alt="..."/>
                    </div>
                </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <div className='product-wise-details d-flex'>
            <div className='description-1'>
                <div className='d-flex product-heading'>
                    <span className='product-title'>{item.title}</span>
                    <div className='product-rating'>
                    <span className='rating'>{item.rating} </span>
                    <img src={star} alt="" width="20px" height="20px" className='star'/>
                    <span className='m-2'>|</span>
                    <span className='m-2'>4.7k Rating</span>
                    </div>
                </div>
                <div className='product-pricing'>
                    <span className='product-price'>$ {item.price}</span>
                    <span className='product-discount'>{item.discountPercentage} % discount</span>
                </div>
            </div>
            <div className='description-2'>
                <span className='product-description-text'>Product Description</span>
                <span className=''>{item.description}</span>
            </div>
          </div>
          <div className='d-flex buttons'>
            <button className='button-1'>Add to Cart</button>
            <button className='button-2'>Buy Now</button>
          </div>
          </div>
            ))}
            </div>
            <Footer />   
        </div>
    )
}

export default ProductDetails;