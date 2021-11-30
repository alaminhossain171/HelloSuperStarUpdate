import * as React from 'react';
import { useHistory } from "react-router-dom";
import '../../../../../Admin/Component/Home/LiveChat/Content/SubContent/AddSession.css'
import AddSessionBanner from '../../../../../../images/SimpleBanner.jpeg';
import frame from '../../../../../../images/Normal-User/frame.png';



const SuperstarAddSession = () => {

    let history = useHistory();

    function handleClick() {
        history.push("/superstar");
    }

    return (
        <>
            <div className="card ad-card">
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <div className="p-2 m-2">
                            <div className="text-center image-middle">
                                <img className="singleFrame-style" src={frame} alt="" />
                                <h3 className="centered">Add Session</h3>
                            </div>

                            <div>
                                <img className="img-fluid rounded mt-2" src={AddSessionBanner} alt="" />
                            </div>

                            <form>
                                <div className="row my-5">
                                    {/* <div> */}
                                    <div className="form-group mb-3">
                                        <big className="text-white">Live Banner</big>
                                        <input type="file" className="form-control input-overlay" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                                    </div>
                                    <div className="form-group my-3">
                                        <big className="text-white">Star Name</big>
                                        <input type="email" className="form-control input-overlay" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                                    </div>
                                    <div className="form-group my-3">
                                        <big className="text-white">Purpose of live: </big>
                                        <input type="password" className="form-control input-overlay" id="exampleInputPassword1" />
                                    </div>

                                    <div className="form-group my-3">
                                        <big className="text-white">Duration </big>
                                        <div className="form-group row my-1">
                                            <label for="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm text-light">
                                                Time
                                            </label>
                                            <div className="col-md-9">
                                                <input type="time" className="form-control form-control-sm account-input-style" />
                                            </div>-

                                        </div>

                                    </div>



                                    <div className="form-group my-3">
                                        <big className="text-white">Schedule </big>

                                        <div className="form-group row my-1">
                                            <label for="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm text-light">
                                                Date
                                            </label>
                                            <div className="col-md-9">
                                                <input type="date" className="form-control form-control-sm account-input-style"
                                                    placeholder="John Doe" />
                                            </div>
                                        </div>


                                    </div>


                                </div>




                                <div className="text-center">
                                    <button onClick={handleClick} type="submit" className="my-3 btn-gold-primary">Submit</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SuperstarAddSession