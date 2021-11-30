import React from 'react'

import '../CSS/Sidebar/Left/Left.css'
import '../CSS/Sidebar/Left/Category.css'
import '../CSS/Sidebar/Left/Following.css'

import {Link, withRouter} from 'react-router-dom'
import SubCatdata from './Left/Category/SubCategory/SubCatData'
import { Users } from '../../DummyData'
import Online from '../Sidebar/Left/StarsOnline/Online'

export const LeftSidebar = ({history}) => {

    console.log(history)
    const getColor=(curr)=>
    {
      if (history.location.pathname===curr)
      return "#FFAD00"
    }
    const getColors=(curr)=>
    {
      if (history.location.pathname===curr)
      return "white"
    }


    return (
        <>
        
            <div className="container left-col-box p-3 mt-3">
                
                <div class="accordion " id="accordionExample">
                    <div className="accordion" id="accordionExample">
                        
                       
                        <div className="accordion-item left-bottom-ap">
                            <Link className="teop-s" to='/category'>
                            <h2 className="accordion-header " id="headingOne">
                                    <button className="accordion-button npm-bnt profile-accordion-button-icon left-bottom-ap collapsed"
                                        type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false"
                                        aria-controls="collapseOne" style={{backgroundColor:getColor('/category')}}>
                                        <span>
                                      <i className="fas fa-layer-group mx-2 profile-font-color fa-2x"style={{color:getColors('/category')}} ></i>
                                        </span>
                                        <span className="mx-2 profile-font-color" style={{color:getColors('/category')}}>
                                            Category <br></br>
                                            <small className="category-size-chat" style={{color:getColors('/category')}} > 5 selectd</small>
                                        </span>
                                    </button>                     
                            </h2>
                            </Link>

                            <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne"
                            data-bs-parent="#accordionExample">
                                <div className="accordion-body accordion-body-im Select-home-category-scroll ">
                                    <SubCatdata/>
                                </div>
                            </div>

                        </div>

                        <Link className="teop-s" to='/following'>
                            <div className="accordion-item mt-1 left-bottom-ap">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button profile-accordion-button left-bottom-ap collapsed" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
                                        aria-controls="collapseTwo" style={{backgroundColor:getColor('/following')}}>
                                        <span>
                                            <i className="fas fa-star mx-2 profile-font-color fa-2x" style={{color:getColors('/following')}}></i>
                                        </span>
                                        <span className="mx-2 profile-font-color" style={{color:getColors('/following')}}>
                                            Following <br></br>
                                            <small className="category-size-chat" style={{color:getColors('/following')}}> 25 star</small>
                                        </span>
                                    </button>
                                </h2>
                            </div>
                        </Link>


                        <Link className="teop-s" to='/wallet'>
                            <div className="accordion-item mt-1 left-bottom-ap">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button profile-accordion-button left-bottom-ap collapsed" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
                                        aria-controls="collapseTwo" style={{backgroundColor:getColor('/wallet')}}>
                                        <span>
                                            <i className="fas fa-wallet mx-2 profile-font-color fa-2x" style={{color:getColors('/wallet')}}></i>
                                        </span>
                                        <span className="mx-2 profile-font-color" style={{color:getColors('/wallet')}}>
                                            Wallet <br></br>
                                            <small className="category-size-chat" style={{color:getColors('/wallet')}}> 200 star</small>
                                        </span>
                                    </button>
                                </h2>
                            </div>
                        </Link>

                        
                        <Link className="teop-s" to='/enrolled-auditions'>
                            <div className="accordion-item mt-1 left-bottom-ap" >
                                <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button profile-accordion-button left-bottom-ap collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" 
                                            aria-controls="collapseTwo" style={{backgroundColor:getColor('/enrolled-auditions')}}>
                                            <span>
                                                <i className="fas fa-id-card mx-2 profile-font-color fa-2x" style={{color:getColors('/enrolled-auditions')}}></i>
                                            </span>
                                            <span className="mx-2 profile-font-color" style={{color:getColors('/enrolled-auditions')}}>
                                                Enrolled audition <br></br>
                                                <small className="category-size-chat" style={{color:getColors('/enrolled-auditions')}}> 1 pending</small>
                                            </span>
                                        </button>

                                </h2>
                            </div>
                        </Link>
                            

                        <Link className="teop-s" to='/settings'>
                            <div className="accordion-item mt-1 left-bottom-ap" >
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button profile-accordion-button left-bottom-ap collapsed" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" 
                                        aria-controls="collapseTwo" style={{backgroundColor:getColor('/settings')}} >
                                        <span>
                                            <i className="fas fa-cog mx-2 profile-font-color fa-2x" style={{color:getColors('/settings')}}></i>
                                        </span>
                                        <span className="mx-2 profile-font-color" style={{color:getColors('/settings')}}>Setting</span>
                                    </button>
                                </h2>
                            </div>
                        </Link>


                    </div>
                    
                </div>

            </div>
            
            { /* Stars Online */}
            <div className="container left-col-box-home-chat chat01 p-3 mt-3">
                <div className="accordion left-c">
                    <div class="accordion-header input-group ">
                        <span class="form-outline Stars-search">Stars Online</span>
                        <span class="form-outline Stars-search">
                            <input type="text" className="Stars-searchid"/>
                        </span>
                    </div>

                    <div class="ScrollStyle">
                        <div className="left-bottom-ap-chat">
                            {Users.map((u) => (
                              <Online key={u.id} user={u} />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
            { /* Stars Online End*/}

        </>
    )
}
export default withRouter(LeftSidebar);
