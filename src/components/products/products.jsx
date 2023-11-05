import React, { useEffect, useState } from 'react';
import background from '../../images/homebackground.jpg';
import '../products/products.css';

const Products = () => {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [smartPhones, setSmartphones] = useState([]);
    const [laptops, setLaptops] = useState([]);
    const [fragranceProducts, setFragranceProducts] = useState([]);
    const [skinCareProducts, setSkinCareProducts] = useState([]);
    const [homeDecoration, setHomeDecoration] = useState([]);
    const [groceries, setGroceries] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/products/categories")
        .then((res) => res.json())
        .then((json) => {
            setCategories(json);
        });
        fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((json) => {
            setProducts(json.products);
        });
    }, []);

    useEffect(() => {
        if (products.length !== 0) {
            setSmartphones(products.filter((item) => item.category === 'smartphones'));
            setLaptops(products.filter((item) => item.category === 'laptops'));
            setFragranceProducts(products.filter((item) => item.category === 'fragrances'));
            setSkinCareProducts(products.filter((item) => item.category === 'skincare'));
            setHomeDecoration(products.filter((item) => item.category === 'home-decoration'));
            setGroceries(products.filter((item) => item.category === 'groceries'))
        }
    }, [products]);

    const handleChange = (event) => {
      window.location.replace(`/products/${event.target.value}`);
    };

    return(
      <div>
        <div className='background-img'>
          <img src={background} alt="" width="100%"></img>
        </div>
        <div className='products'>
            <select name="products" id="products" className='dropdown' onChange={handleChange}>
                <option value="">Select Category</option>
                {categories.map((name, index) =>
                  <option value={name} className='select-option'>{name}</option>
                )}
            </select>
            <h2 className='product-header'>Smart Phones</h2>
            <div className='smartphones'>
                {smartPhones.map((item) => 
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
            <h2 className='product-header'>Laptops</h2>
            <div className='laptops'>
                {laptops.map((item) => 
                <div className='laptops-cards'>
                  <img src={item.thumbnail} alt='' width="200px" height="200px" className='thumbnail'/>
                  <div className='details'>
                    <span key={item.id} className='title'>{item.title}</span>
                    <span className='sub-title'>Product Description: {item.description}</span>
                    <span className="price">$ {item.price}</span>
                    <a href={`/product/category/${item.title}`} className='read-more'>Read More</a>
                  </div>
                </div>
                )}
            </div>
            <h2 className='product-header'>Fragrances</h2>
            <div className='fragrances'>
                {fragranceProducts.map((item) => 
                <div className='fragrances-cards'>
                  <img src={item.thumbnail} alt='' width="200px" height="200px" className='thumbnail'/>
                  <div className='details'>
                    <span key={item.id} className='title'>{item.title}</span>
                    <span className='sub-title'>Product Description: {item.description}</span>
                    <span className="price">$ {item.price}</span>
                    <a href={`/product/category/${item.title}`} className='read-more'>Read More</a>
                  </div>
                </div>
                )}
            </div>
            <h2 className='product-header'>Skin Care</h2>
            <div className='skincare'>
                {skinCareProducts.map((item) => 
                <div className='skincare-cards'>
                  <img src={item.thumbnail} alt='' width="200px" height="200px" className='thumbnail'/>
                  <div className='details'>
                    <span key={item.id} className='title'>{item.title}</span>
                    <span className='sub-title'>Product Description: {item.description}</span>
                    <span className="price">$ {item.price}</span>
                    <a href={`/product/category/${item.title}`} className='read-more'>Read More</a>
                  </div>
                </div>
                )}
            </div>
            <h2 className='product-header'>Home Decorations</h2>
            <div className='home-decoration'>
                {homeDecoration.map((item) => 
                <div className='home-decoration-cards'>
                  <img src={item.thumbnail} alt='' width="200px" height="200px" className='thumbnail'/>
                  <div className='details'>
                    <span key={item.id} className='title'>{item.title}</span>
                    <span className='sub-title'>Product Description: {item.description}</span>
                    <span className="price">$ {item.price}</span>
                    <a href={`/product/category/${item.title}`} className='read-more'>Read More</a>
                  </div>
                </div>
                )}
            </div>
            <h2 className='product-header'>Groceries</h2>
            <div className='groceries'>
                {groceries.map((item) => 
                <div className='groceries-cards'>
                  <img src={item.thumbnail} alt='' width="200px" height="200px" className='thumbnail'/>
                  <div className='details'>
                    <span key={item.id} className='title'>{item.title}</span>
                    <span className='sub-title'>Product Description: {item.description}</span>
                    <span className="price">$ {item.price}</span>
                    <a href={`/product/category/${item.title}`} className='read-more'>Read More</a>
                  </div>
                </div>
                )}
            </div>
        </div>
      </div>
    )
}

export default Products;