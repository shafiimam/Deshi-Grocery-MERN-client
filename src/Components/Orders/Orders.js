import React from "react";
import { Container, Spinner, Table } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  useEffect(() => {
    async function fetchOrders() {
      const response = await fetch(
        "https://apricot-cake-96619.herokuapp.com/orders?email=" + loggedInUser.email,
        {
          method: "GET",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        }
      );
      const orders = await response.json();
      setOrders(orders);
      console.log(orders);
    }
    fetchOrders();
  }, []);
  return (
    <Container>
      {
        orders.length === 0 ? <Container className="my-5 d-flex align-items-center flex-column">
        <h1><Spinner className="mr-auto" animation="grow" variant="info" size="lg" /></h1>
        <h4>Loading Orders</h4>
    </Container>:
    <div>
       <h2>Your have {orders.length} orders</h2>
      <ul>
        <Table bordered striped size="lg" variant="dark" responsive="lg">
          <thead>
            <tr>
              <th>Description</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          {orders.map((order) => (
            <tbody>
              <tr>
                <td>{order.products.name}</td>
                <td>1</td>
                <td>${order.products.price}</td>
              </tr>
            </tbody>
          ))}
        </Table>
      </ul>
    </div>
      }
     
      
    </Container>
  );
};

export default Orders;
