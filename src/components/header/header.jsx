import React, { useState } from 'react';
import logo from '../../images/logo.png';
import store from '../../images/store.png';
import account from '../../images/account.png';
import wishlist from '../../images/wishlist.png';
import searchicon from '../../images/search-interface-symbol.png';
import '../header/header.css';

const Header = () => {
  const [searchedValue, setSearchedValue] = useState('');

  const handleChange = (event) => {
    setSearchedValue(event.target.value);
  }

  const handleSearchClick = () => { 
    window.location.replace(`/products/${searchedValue}`);
  }

  const handleEnterClick = (event) => {
    if (event.key === 'Enter') {
      window.location.replace(`/products/${searchedValue}`);
    }
  };

  const handleHeadingClick = () => {
    window.location.replace('/home');
  }

   return (
    <header className='header-container'>
        <h1 className='heading' onClick={handleHeadingClick}>
          <img src={logo} alt="" width="40px" height="40px" className='logo'/>
          <span className='heading-text'>SuBsY CaRt</span>
        </h1>
        <div className='search'>
        <input placeholder="Search" type="text" className='search-input' onKeyUp={handleEnterClick} onChange={handleChange}/>
        <img src={searchicon} alt ="" className='search-icon' onClick={handleSearchClick}/>
        <div className='header-menu'>
           <img src={store} alt="" width="30px" height="30px" className='store-img'/>
           <span className='store'>Store</span>
           <img src={account} alt="" width="30px" height="30px" className='account-img'/>
           <span className='account'>Account</span>
           <img src={wishlist} alt="" width="30px" height="30px" className='wishlist-img'/>
           <span className='wishlist'>Wishlist</span>
        </div>
        </div>
    </header>
   )
}

export default Header;