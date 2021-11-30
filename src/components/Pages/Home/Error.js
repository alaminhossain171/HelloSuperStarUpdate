import React, { Component } from "react";
import {Link} from 'react-router-dom'
import "../../CSS/Error/Error.css"
import Navigation from '../../Header/Navigation'
export default class Error extends Component {
render() {
return (
<React.Fragment>
    <Navigation/>
    <div className="homebody" >
        <div className="container">
            <div className="row">

                <section class="page_404">
                    <div class="container">
                        <div class="row">
                            <div class="col-12  text-center">
                                <div class="four_zero_four_bg">
                                <h1 class="text-center ">Not Found</h1>
                                </div>
                                <div class="contant_box_404">
                                    <h3 class="h2">
                                        Look like you're lost
                                    </h3>
                                    <p>the page you are looking for not available!</p>
                                    <Link to='/' className="link_404">Go to Home</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    </div>
</React.Fragment>
);
}
}