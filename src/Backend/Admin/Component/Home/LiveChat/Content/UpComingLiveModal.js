import React from 'react'
import { Modal} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../../../CSS/LVModal.css'
export default function UpComingLiveModal(props) {
return (
<>
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal closeButton>
            <Modal.Title id="contained-modal-title-vcenter">

            </Modal.Title>
        </Modal>
        <Modal.Body className="Modal-js-body">
                    <button className="RightSlotBtn " onClick={props.onHide}>X</button>
            <div className="container">
                <form className="p-3">
                    <div className="form-group row my-3">
                        <label for="colFormLabelSm" className="col-sm-1 col-form-label col-form-label-sm text-light">
                            Date
                        </label>
                        <div className="col-sm-3">
                            <input type="date" className="form-control form-control-sm account-input-style" />
                        </div> 

                        <label for="colFormLabelSm" className="col-sm-1 col-form-label col-form-label-sm text-light">
                            Time
                        </label>
                        <div className="col-sm-3">
                            <input type="time" className="form-control form-control-sm account-input-style" />
                        </div>

                        <div className="col-sm-2 view-li-up">
                            <Link to='/admin/live-chat/schedule'><button className="form-control form-control-sm account-input-style ">View</button></Link>
                        </div>

                    </div>
l
                </form>

            </div>
        </Modal.Body>

        {/* <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer> */}
    </Modal>
</>
)
}