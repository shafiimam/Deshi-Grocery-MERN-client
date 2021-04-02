import Header from './Components/Header/Header';
import { BrowserRouter as Router, Route, Switch}  from "react-router-dom";
import Shop from './Components/Shop/Shop';
import { createContext, useState } from 'react';
import Login from './Components/Login/Login';
import CheckOut from './Components/CheckOut/CheckOut';
import AddProduct from './Components/AddProduct/AddProduct';
import Admin from './Components/Admin/Admin';
import Orders from './Components/Orders/Orders';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

export const UserContext = createContext()
function App() {
  const [loggedInUser,setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
      <Router>
      <Header/>
      <Switch>
        <Route path="/" exact>
          <Shop></Shop>
        </Route>
        <Route path="/home">
          <Shop></Shop>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <PrivateRoute path="/product/:key">
          <CheckOut></CheckOut>
        </PrivateRoute>
        <Route path="/addProduct">
          <AddProduct></AddProduct>
        </Route>
        <PrivateRoute path="/admin">
          <Admin></Admin>
        </PrivateRoute>
        <PrivateRoute path="/orders">
          <Orders></Orders>
        </PrivateRoute>
      </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
