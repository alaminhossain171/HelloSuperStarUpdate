import React from 'react'
import HelloSuperStarLogo from '../../images/HelloSuperStarLogo.png'

// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PlayArrow from '@material-ui/icons/PlayArrow';
import '../../App.css';
import { Link } from 'react-router-dom';

const HelloSuperStarDemo = () => {

          return (
                    <div className=" col-md-6 pt-5 d-flex justify-content-center align-items-center flex-column">
                              <div>
                                        <img src={HelloSuperStarLogo} alt="Hello Super Star Logo" />
                                      
                              </div>
                              <div>
                                  <Link to="/tutorial"><button className='btn mt-3 text-light px-4 btn-warning'>
                                        
                                        <PlayArrow />
                                          <span className='mx-2'>Virtual Tour</span>
                                     </button>  
                                     
                                   </Link>
                              </div>
                    </div>
          )

}

export default HelloSuperStarDemo;

