import React from 'react'
import '../../../../../CSS/Profile/LiveChat/liveChat.css'
import StarProfileRightContent from '../StarCardComponent/StarProfileRightContent/StarProfileRightContent'
import LiveChatModal from './LiveChatModal';
const LiveChat = () => {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <div className='container'>
<div className="row">
    <div className="col-md-8">

    <div class="card live-card-bg my-4 mx-auto" >
  <div class="card-body">
    <h5 class="card-title text-warning">Live Chat Instructions</h5>
    <div className="star-line"></div>
   <div className="instruct">
   <p class=" my-3 text-light">1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque sunt, voluptatum excepturi minima facilis quisquam.</p>
    <p class=" my-3 text-light">2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, perferendis. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, repellat perspiciatis sit ut excepturi minus aperiam consectetur eaque nostrum ex ab porro corporis quidem deleniti, vel quae corrupti natus. Id.</p>
    <p class=" my-3 text-light">3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, perferendis. Lorem ipsum dolor sit amet. </p>

    <p class=" my-3 text-light">4. Lorem ipsum dolor sit amet consectetur adipisicing elit..</p>

    <p class=" my-3 text-light">5. Lorem ipsum dolor sit amet .</p>
   </div>
    
  </div>
</div>

<div class="card live-card-bg my-4 mx-auto" >
  <div class="card-body">
    <h5 class="card-title text-warning">Slot checking</h5>
    <div className="star-line"></div>
    <div className="card-body">

      <h6 className='text-light'>Live chat time perfered</h6>

<div className="row mt-3">
    <div className="col-6 ">
       <div className="left-slot  w-75 text-center p-1">
           <span>20</span> <span className='mx-2'>Sep</span> <span>21</span>
       </div>
    </div>
    <div className="col-6 ">
    <div className="Right-slot  w-75 text-center p-1">
    <span>11</span> <span className='mx-2'>59</span> <span>PM</span>
       </div>
    </div>
</div>

<h6 className='text-light mt-5'>Time Period</h6>

<div className="row mt-3">
    <div className="col-6 ">
       <div className="left-slot  w-75 text-center p-1">
           <input type='number' placeholder='Maximum 5 minute' className='form-control time'></input>
       </div>
    </div>
    <div className="col-6 ">
    <div className="Right-slot slot-btn bg-warning  w-75 text-center p-1" onClick={() => setModalShow(true)}>
    <span className='text-dark'>Check Slot</span>
       </div>
       <LiveChatModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
</div>

    </div>
    
  </div>
</div>

    </div>

    <div className="col-md-4">
        <StarProfileRightContent />
    </div>
</div>



        </div>
    )
}

export default LiveChat
