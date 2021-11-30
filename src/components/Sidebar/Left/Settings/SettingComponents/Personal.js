import React from 'react'
import { Form, Col, Row, Button } from 'react-bootstrap';

import "../../../../CSS/userSettings/settings.css";

const Personal = () => {
    return (
       <div className="container">
          <Form >
        <Form.Group as={Row} className="mb-1 p-3" controlId="formHorizontalText">
          <Form.Label column sm={1}>
            <p className="settingPersonalText">Name</p>
          </Form.Label>
          <Col sm={8} className="settingPersonalInputField">
            <Form.Control className="border-warning" type="text" placeholder="John Doe" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-1 p-3" controlId="formHorizontalNumber">
          <Form.Label column sm={1}>
            <p className="settingPersonalText">Phone</p>
          </Form.Label>
          <Col sm={8} className="settingPersonalInputField">
            <Form.Control className="border-warning" type="number" placeholder="+88018270000000"/>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-1 p-3" controlId="formHorizontalEmail">
          <Form.Label column sm={1} className="settingPersonaledit form-label">
            <p className="settingPersonalText">Email</p>
          </Form.Label>
          <Col sm={8} className="settingPersonalInputField">
            <Form.Control className="border-warning" type="email" placeholder="jhon@gmail.com" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-1 p-3" controlId="formHorizontalDate">
          <Form.Label column sm={1}>
            <p className="settingPersonalText">Birthday</p>
          </Form.Label>
          <Col sm={8} className="settingPersonalInputField">
            <Form.Control className="border-warning" type="date" placeholder="12 10 1997" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-1 p-3" controlId="formHorizontalText">
          <Form.Label column sm={1}>
            <p className="settingPersonalText">Country</p>
          </Form.Label>
          <Col sm={8} className="settingPersonalInputField">
            <Form.Control className="border-warning" type="text" placeholder="Bangladesh" />
          </Col>
        </Form.Group>
          
        <Form.Group as={Row} className="mb-1 p-3" controlId="formHorizontalPassword">
          <Form.Label column sm={1}>
            <p className="settingPersonalText">Password</p>
          </Form.Label>
          <Col sm={8} className="settingPersonalInputField">
            <Form.Control type="password" placeholder="Password" className="border-warning"/>
          </Col>
        </Form.Group>
        
        <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 0 }}>
                <Button variant="outline-warning" className="personalButtonSave">Save</Button>
          </Col>
        </Form.Group>
      </Form>
       </div>
    )
}

export default Personal;
