import React from 'react';
import { Form, Button } from 'react-bootstrap';
import "../../../../CSS/userSettings/settings.css"

const Interest = () => {
    
    return (
        <div className="container">
            <Form className="interestMainForm">
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Travelling" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Food" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Technology" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Entertainment" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Dgital World" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Gaming" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Environment" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Education" />
                </Form.Group>
            </Form>
            <div className="flex-row">
                <input type="password" className="interestPasswordField border-warning" />
                <Button variant="outline-warning"  style={{width: "45%", marginLeft: "10px"}} className="educationalButtonSave">Save</Button>
           </div>
        </div>
    )
}

export default Interest
