import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import { Col, Container, Row, Spinner } from "react-bootstrap";
const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://apricot-cake-96619.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [products]);
  return (
    <Container>
      {products.length === 0 ? (
        <Container className="my-5 d-flex align-items-center flex-column">
            <h1><Spinner className="mr-auto" animation="grow" variant="info" size="lg" /></h1>
            <h4>Loading Products</h4>
        </Container>
      ) : (
        <Row>
          {products.map((product) => (
            <Col lg={3} md={4} sm={2}>
              <Product product={product} key={product.key}></Product>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default Shop;
