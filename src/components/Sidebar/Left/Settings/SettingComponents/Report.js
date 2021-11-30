import React, {useState} from 'react'
import { Form, Button } from 'react-bootstrap';
import "../../../../CSS/userSettings/settings.css"
const Report = () => {
    const [type, setType] = useState("Dictamen");
    return (
        <div className="container">
            <Form className="reportMainForm">
                <Form.Group className="queryFromGroup">
                    <Form.Label>How can we help?</Form.Label>
                    <Form.Control
                    className="QuerySelects"
                    as="select"
                    value={type}
                    onChange={e => {
                        console.log("e.target.value", e.target.value);
                        setType(e.target.value);
                    }}
                    >
                    <option value="DICTUM">how to be a premium member!</option>
                    <option value="CONSTANCY">How to join Super Star liveness learning section?</option>
                    <option value="COMPLEMENT">Is it possible to be a SuperStar from a general member?</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="commentsFromGroup">
                    <Form.Label>Explain the issue</Form.Label>
                    <Form.Control  as="textarea" className="reportComments"
                        placeholder="Leave a comment here"
                    />
                </Form.Group>
                <Form.Group className="commentsFromGroup" >
                    <Form.Label>Attach any document</Form.Label>
                    <Form.Control type="file" size="lg" className="reportFileAttatched" />
                </Form.Group>
                
            </Form>
            <div className="flex-row securitySaveDiv">
                <Button variant="outline-warning" className="reportButtonSave">Save</Button>
           </div>
        </div>
    )
}

export default Report;
