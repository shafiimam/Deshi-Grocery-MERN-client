import React, { useEffect, useState } from "react";
import { Button, Container, Spinner } from "react-bootstrap";
import { Table } from "react-bootstrap";
const ManageProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://apricot-cake-96619.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [products]);
  const handleDelete = (key) => {
    console.log(key);
    fetch("https://apricot-cake-96619.herokuapp.com/admin/deleteProduct/" + key)
      .then((res) => res.json())
      .then((data) => alert("Product deleted successfully"));
  };
  return (
    <Container>
      <h2 className='p-3'>Manage Product</h2>
      {products.length === 0 ? (
        <Container className="my-5 d-flex align-items-center flex-column">
          <h1>
            <Spinner
              className="mr-auto"
              animation="grow"
              variant="info"
              size="lg"
            />
          </h1>
          <h4>Loading Products</h4>
        </Container>
      ) : (
        <Table bordered striped size="md" variant="dark" responsive="sm">
          <thead>
            <tr>
              <th>Product Key</th>
              <th>Product Name</th>
              <th>Weight</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.key}>
                <td>{product.key}</td>
                <td>{product.name}</td>
                <td>{product.weight}</td>
                <td>{product.price}</td>
                <td>
                  <Button variant="warning" outline><i class="bi bi-pencil-square"></i></Button> &nbsp;{" "}
                  <Button variant="danger" onClick={() => handleDelete(product.key)}>
                  <i class="bi bi-trash-fill"></i>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default ManageProduct;
