import React, { useEffect }from 'react';
import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';
import App from '../App';
import SearchDetails from '../components/searchdetails/searchdetails';
import ProductDetails from '../components/productdetails/productdetails';

const AppRouter = () => {
    useEffect(() => {
        console.log(window.location);
        if (window.location.pathname === '/') {
          window.location.replace('/home');
        }
      }, []);

    return(
        <Router>
            <Routes>
                <Route path='' />
                <Route path='/home' Component={App}/>
                <Route path='/products/:id' Component={SearchDetails} />
                <Route path='/product/category/:id' Component={ProductDetails} />
            </Routes>
        </Router>
    )
}

export default AppRouter;