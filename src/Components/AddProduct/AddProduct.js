import React from "react";
import { Button, Col, Container,Row} from "react-bootstrap";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
const AddProduct = () => {
  const { register, handleSubmit} = useForm();
  const [imageURL, setImageURL] = useState(null);
  const [imageUploaded, setImageUploaded] = useState(false);
  const onSubmit = (data,e) => {
    const productData = {
      key: data.productKey,
      name: data.name,
      weight: data.weight,
      price: data.price,

      imageURL: imageURL,
    };
    const url = `https://apricot-cake-96619.herokuapp.com/admin/addProduct`;

    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(productData),
    }).then((res) => console.log("server side response", res));
    e.target.reset();
  };
  const handleImageUpload = (event) => {
    //console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "5bd2a541df21cc24e52f372c8b5b1e38");
    imageData.append("image", event.target.files[0]);
    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        console.log(response);
        setImageURL(response.data.data.display_url);
        setImageUploaded(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Container>
      <h3 className="p-3">Add Product</h3>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-secondary p-3 text-white rounded"
      >
        <Row>
          <Col className="p-3">
            <h4>Product Name</h4>
            <input
              name="name"
              type="text"
              placeholder="Enter Name"
              ref={register}
            />
          </Col>
          <Col className="p-3">
            <h4>weight</h4>
            <input
              name="weight"
              type="text"
              placeholder="Enter Weight"
              ref={register}
            />
          </Col>
        </Row>
        <Row>
          <Col className="p-3">
            <h4>Add Price</h4>
            <input
              name="price"
              type="text"
              placeholder="Enter Price"
              ref={register}
            />
          </Col>
          <Col className="p-3">
            <h4>Add Photo</h4>
            <i class="bi bi-cloud-arrow-up-fill"></i>
            <label htmlFor="enterPhoto">upload image</label>
            
            <input
              name="enterPhoto"
              onChange={handleImageUpload}
              type="file"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <h4>Enter product key</h4>
            <input
              name="productKey"
              type="text"
              placeholder="Enter product key"
              ref={register}
            />
          </Col>
          <Col className="p-3">
            {!imageUploaded ? (
              <p>Fill all the field</p>
            ) : (
              <input
                type="submit"
                className="btn btn-primary my-5 w-25 float-right"
              />
            )}
          </Col>
        </Row>
      </form>
    </Container>
  );
};

export default AddProduct;
