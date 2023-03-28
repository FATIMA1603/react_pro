import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React from 'react';

function BasssicExample() {
  return (
    <Form className='form m-5'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address*</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password*</Form.Label>
        <Form.Control type="password" placeholder="Enter password" />
      </Form.Group>
      <Form.Text className="text-muted">
          Forgot password
    
        </Form.Text>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button  type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default BasssicExample;