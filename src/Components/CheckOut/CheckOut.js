import React, { useContext, useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { UserContext } from '../../App';
const CheckOut = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const [checkOut, setCheckout] = useState(false);
  const [product, setProduct] = useState({})
  const { key } = useParams();
  useEffect(()=>{
    fetch(`https://apricot-cake-96619.herokuapp.com/product/${key}`)
    .then(res=>res.json())
    .then(data=> setProduct(data))
  })

  
  const handleCheckout = () => {
    const orderDetails = {...loggedInUser,products:product,orderTime: new Date()}
    fetch(`https://apricot-cake-96619.herokuapp.com/addOrder`,{
      method: 'POST',
      headers: {'content-type':'application/json'},
      body : JSON.stringify(orderDetails)
    })
    .then(res=>res.json())
    .then(data=> setCheckout(true))
    console.log(orderDetails)
    setCheckout(true)
  }
  
  return (
    <Container>
      {!checkOut ? (
        <div>
          <h1 className="my-5">CheckOut</h1>
          <Table bordered striped size="md" variant="dark" responsive="lg">
            <thead>
              <tr>
                <th>Description</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{product.name}</td>
                <td>1</td>
                <td>${product.price}</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td>Total</td>
                <td></td>
                <td>${product.price}</td>
              </tr>
            </tfoot>
          </Table>

          <Button className="float-right" onClick={handleCheckout}>
            Check Out
          </Button>
        </div>
      ) : (
        <Container>
          <h2 className="text-center my-5">Thank you for ordering!!</h2>
          <h5 className="text-center"><Link to="/orders">See your orders</Link></h5>
        </Container>
      )}
    </Container>
  );
};

export default CheckOut;
