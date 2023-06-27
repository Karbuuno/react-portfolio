import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import validation from "./validation";

function Contact() {
  const [values, setValues] = useState({
    fname: "",
    lname: "",
    email: "",
    mobile: "",
    massage: "",
  });
  const [errors, setErrors] = useState({});
  function handleChange(e) {
    const newOject = { ...values, [e.target.name]: e.target.value };
    setValues(newOject);
  }

  function formValidation(e) {
    e.preventDefault();

    setErrors(validation(values));
  }

  return (
    <>
      <div className=' container mt-2'>
        <h2 className='text-center'>Contact Me</h2>
        <div className='container mt-2'>
          <Form className='row mt-5' onSubmit={formValidation}>
            <Form.Group className='mb-3 col-lg-6' controlId='formBasicEmail'>
              <Form.Label>First Name</Form.Label>
              <Form.Control type='text' name='fname' onChange={handleChange} />
              {errors && <p style={{ color: "red" }}>{errors.fname}</p>}
            </Form.Group>
            <Form.Group className='mb-3 col-lg-6' controlId='formBasicEmail'>
              <Form.Label>Last Name</Form.Label>
              <Form.Control type='text' name='lname' onChange={handleChange} />
              {errors && <p style={{ color: "red" }}>{errors.lname}</p>}
            </Form.Group>
            <Form.Group className='mb-3 col-lg-6' controlId='formBasicEmail'>
              <Form.Label>Email address</Form.Label>
              <Form.Control type='email' name='email' onChange={handleChange} />
              {errors && <p style={{ color: "red" }}>{errors.email}</p>}
            </Form.Group>
            <Form.Group className='mb-3 col-lg-6' controlId='formBasicEmail'>
              <Form.Label>Mobile</Form.Label>
              <Form.Control
                type='number'
                name='mobile'
                onChange={handleChange}
              />
              {errors && <p style={{ color: "red" }}>{errors.mobile}</p>}
            </Form.Group>
            <Form.Group
              className='mb-3'
              controlId='exampleForm.ControlTextarea1'
            >
              <Form.Label>Massage</Form.Label>
              <Form.Control as='textarea' rows={4} name='massage' />
              {errors && <p style={{ color: "red" }}>{errors.massage}</p>}
            </Form.Group>

            <div className='d-flex justify-content-center mt-5'>
              <Button variant='primary' className='col-lg-6' type='submit'>
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}

export default Contact;
