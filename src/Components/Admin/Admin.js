import React from 'react';
import { Container } from 'react-bootstrap';
import Switch from 'react-bootstrap/esm/Switch';
import { Link, Route } from 'react-router-dom';
import AddProduct from '../AddProduct/AddProduct';
import EditProduct from '../EditProduct/EditProduct';
import ManageProduct from '../ManageProduct/ManageProduct';
import './Admin.css'
const Admin = () => {
    return (
        <Container className="admin-panel">
           <div className="side-bar">
           <h3>Deshi Bazar </h3>
           <ul>
               <li><Link style={{textDecoration:'none',color:'grey'}} to="/admin/addProduct">Add Product</Link></li>
               <li><Link style={{textDecoration:'none',color:'grey'}} to="/admin/manageProduct">Manage products</Link></li>
               <li><Link style={{textDecoration:'none',color:'grey'}} to="/admin/editProduct">Edit Product</Link></li>
           </ul>
           </div>
           <Switch>
               <Route path="/admin/addProduct">
                <AddProduct></AddProduct>
               </Route>
               <Route path="/admin/manageProduct">
                <ManageProduct></ManageProduct>
               </Route>
               <Route path="/admin/editProduct">
                   <EditProduct></EditProduct>
               </Route>
           </Switch>
        </Container>
    );
};

export default Admin;