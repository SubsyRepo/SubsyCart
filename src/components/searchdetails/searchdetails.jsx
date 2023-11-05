import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import '../products/products.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import './searchdetails.css';

const SearchDetails = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const params = useParams()

  useEffect(() => {
    fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((json) => {
        setProducts(json.products);
    });
  }, []);

  useEffect(() => {
    if (products.length !== 0) {
      setFilteredProducts(products.filter((item) => item.category === params.id));
    }
}, [products, params.id]);

  return(
    <div>
      <Header />
      <div className='search-details'>
        <h2 className='product-header'>{params.id}</h2>
          <div className={`${params.id}`}>
              {filteredProducts.map((item) => 
              <div className='smartphones-cards'>
                <img src={item.thumbnail} alt='' width="200px" height="200px" className='thumbnail'/>
                <div className='details'>
                  <span key={item.id} className='title'>{item.brand}</span>
                  <span className='sub-title'>Product Description: {item.description}</span>
                  <span className="price">$ {item.price}</span>
                  <a href={`/product/category/${item.title}`} className='read-more'>Read More</a>
                </div>
              </div>
              )}
          </div>
        </div>
      <Footer />
    </div>
  )
}

export default SearchDetails;