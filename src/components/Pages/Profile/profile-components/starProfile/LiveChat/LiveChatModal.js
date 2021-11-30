import React from 'react';
import { Modal } from 'react-bootstrap';
import Congrass from '../../../../../../images/LiveChat/Congress.png'
import { useHistory } from "react-router-dom"

const LiveChatModal = (props) => {

  let history = useHistory();

  function handleClick() {
    history.push("/starChat");
  }

    return (
        <div>
            <Modal
         
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
     
    >
      <Modal.Header className='text-light' style={{ background:'black' }}>
        <Modal.Title id="contained-modal-title-vcenter">
        <button className='cross-liveChat'  onClick={props.onHide}></button>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body    className='bg-img text-light'>
       
<div className="info-message px-5">
    <img src={Congrass} alt="" className='img-fluid' />
    <h1 className='text-center congress'>Congratulation !</h1>
    <h4 className='text-center my-3'>Slot is Availabe !</h4>
    <h5 className='text-center '>Apply for live chat as soon as possible !</h5>
</div>
<div className="text-center py-3">
    <button className='btn btn-warning text-light' onClick={handleClick}>Apply now !</button>
</div>


      </Modal.Body>
      
      
  
    </Modal>
        </div>
    );
};

export default LiveChatModal;