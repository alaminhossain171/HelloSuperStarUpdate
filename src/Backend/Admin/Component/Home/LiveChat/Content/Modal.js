import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../../../../CSS/LVModal.css'
import { Link } from 'react-router-dom';
export default function LVModal(props) {
return (
<Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
  <Modal closeButton>
    <Modal.Title id="contained-modal-title-vcenter">

    </Modal.Title>
  </Modal>
  <Modal.Body className="Modal-js-body">
    <tr className="container row">
      <td className="leftSlot-md col-md-6"><i class="fas fa-plus-square"> </i> Create Slot</td>
      <td className="RightSlotBtn col-md-6">
        <button className="RightSlotBtn " onClick={props.onHide}>X</button>
      </td>
    </tr>
    <div className="container">
      <form className="p-3">
        <div className="form-group row my-4">
          <label for="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm text-light">
            Date
          </label>
          <div className="col-sm-3">
            <input type="date" className="form-control form-control-sm account-input-style"
              placeholder="John Doe" />
          </div>
        </div>

        <div className="form-group row my-3">
          <label for="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm text-light">
            Time
          </label>
          <div className="col-sm-3">
            <input type="time" className="form-control form-control-sm account-input-style" />
          </div>-
          <div className="col-sm-3">
            <input type="time" className="form-control form-control-sm account-input-style" />
          </div>
        </div>

        <div className="form-group row my-3">
          <label for="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm text-light">
            Per mnt
          </label>
          <div className="col-sm-3">
            <input type="text" className="form-control form-control-sm account-input-style"
              placeholder="1200 BDT" />
          </div>
        </div>

        <div className="form-group row my-3">
          <label for="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm text-light">
            Image
          </label>
          <div className="col-sm-3">
            <input type="file" className="form-control form-control-sm account-input-style" />
          </div>
        </div>

        <div className="form-group row my-3">
          <label for="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm text-light">
            <Link to='/admin/live-chat/confirm'><button className="btn btn-warning w-100 text-dark con-text-bfo">
            Confirm
          </button></Link>
          
          </label>
        </div>
      </form>

    </div>
  </Modal.Body>

  {/* <Modal.Footer>
    <Button onClick={props.onHide}>Close</Button>
  </Modal.Footer> */}
</Modal>
);
}