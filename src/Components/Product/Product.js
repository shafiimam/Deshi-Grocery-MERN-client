import React, { useContext } from "react";
import { Button, ButtonToolbar, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { UserContext } from "../../App";
const Product = ({ product }) => {
  // const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  // const handleBuyNow = () =>{
  //   if()
  // }
  return (
    <div>
      <Card className="my-3 p-3 rounded">
        <Card.Img src={product.imageURL} variant="top" />

        <Card.Body>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
          <Card.Text as="span" className="mx-5 ml-auto">${product.price}</Card.Text>
          <LinkContainer to={"product/"+ product.key} className="ml-auto" variant="success"><Button>Buy Now</Button></LinkContainer>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
