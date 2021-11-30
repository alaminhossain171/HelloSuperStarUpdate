import React from 'react'
import { Form, Col, Row, Button } from 'react-bootstrap';
import "../../../../CSS/userSettings/settings.css"
const Security = () => {
    return (
        <>
        <div className='container'>
            <div className="mobileSecurityMainDiv">
                <h5 className="primary securityInnerHeading">Two Step Verification</h5> <hr style={{color: "white", height:"2px"}} />
                <Form className="SecurityPurpose">
                <Row className="m-2 ">
                    <Form.Group as={Col} sm={9}>
                        <Form.Control  className="SecurityPlaceholder" type="number" placeholder="Enter Mobile Number" />
                    </Form.Group>
                    <Form.Group as={Col} >
                        <Button variant="outline-warning" className="securitySubmitBtn">Submit</Button>
                    </Form.Group>
                </Row>
                </Form>
                <Form className="SecurityPurpose">
                <Row className="m-2 ">
                    <Form.Group as={Col} sm={9}>
                        <Form.Control  className="SecurityPlaceholder" type="text" placeholder="Mobile OTP" />
                    </Form.Group>
                    <Form.Group as={Col} >
                        <Button variant="outline-warning" className="securitySubmitBtn">Submit</Button>
                    </Form.Group>
                </Row>
                </Form>
            </div>
            <div className="emailSecurityMainDiv">
                <h5 className="primary securityInnerHeading">Email</h5> <hr style={{color: "white", height:"2px"}} />
                <Form className="SecurityPurpose">
                <Row className="m-2 ">
                    <Form.Group as={Col} sm={9}>
                        <Form.Control  className="SecurityPlaceholder" type="email" placeholder="Enter Email Address" />
                    </Form.Group>
                    <Form.Group as={Col} >
                        <Button variant="outline-warning" className="securitySubmitBtn">Submit</Button>
                    </Form.Group>
                </Row>
                </Form>
                <Form className="SecurityPurpose">
                <Row className="m-2 ">
                    <Form.Group as={Col} sm={9}>
                        <Form.Control  className="SecurityPlaceholder" type="password" placeholder="Security Code" />
                    </Form.Group>
                    <Form.Group as={Col} >
                        <Button variant="outline-warning" className="securitySubmitBtn">Submit</Button>
                    </Form.Group>
                </Row>
                </Form>
            </div>
            <div className="passwordSecurityMainDiv">
                <h5 className="primary securityInnerHeading">Password</h5> <hr style={{color: "white", height:"2px"}} />
                <Form className="SecurityPurpose">
                <Row className="m-2 ">
                    <Form.Group as={Col} sm={12}>
                        <Form.Control  className="SecurityPlaceholder" type="password" placeholder="Enter Old Password" />
                    </Form.Group>
                </Row>
                </Form>
                <Form className="SecurityPurpose">
                <Row className="m-2 ">
                    <Form.Group as={Col} sm={6}>
                        <Form.Control  className="SecurityPlaceholder" type="password" placeholder="New Password" />
                    </Form.Group>
                    <Form.Group as={Col} sm={6}>
                        <Form.Control  className="SecurityPlaceholder" type="password" placeholder="Confirm New Password" />
                    </Form.Group>
                </Row>
                </Form>
            </div>
            <div className="flex-row securitySaveDiv">
                <Button variant="outline-warning" className="securityButtonSave">Save</Button>
           </div>
            </div>

        </>
    )
}

export default Security;

