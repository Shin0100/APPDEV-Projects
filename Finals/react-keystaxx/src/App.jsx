import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home } from './components/Home';
import { ProductListing } from './components/ProductListing';
import { ProductManual } from './components/ProductManual';
import { CompanyProfile } from './components/CompanyProfile';
import { EmployeeDetail } from './components/EmployeeDetail';
import { Reviews } from './components/Reviews';
import { productData } from './data/productData';
import { employeeData } from './data/employeeData';
import { reviewData } from './data/reviewData';
import { employeeDev } from './data/employeeDev';
import { Developer } from './components/DeveloperDetail';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home |</Link>
          <Link to="/products">Products |</Link>
          <Link to="/company">Company Profile |</Link>
          <Link to="/reviews">Reviews |</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductListing products={productData} />} />
          <Route path="/product/:id" element={<ProductManual products={productData} />} />
          <Route path="/company" element={<CompanyProfile employees={employeeData} developers={employeeDev}/>} />
          <Route path="/employee/:id" element={<EmployeeDetail employees={employeeData} />} />
          <Route path="/developers/:id" element={<Developer employees={employeeDev} />} />
          <Route path="/reviews" element={<Reviews/>} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;