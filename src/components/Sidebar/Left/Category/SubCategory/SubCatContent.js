import React from 'react'
import {Link} from 'react-router-dom'

function SubCatContent () {
    // let category=[
    //     {name:'Hollywood', id:1},
    //     {name:'Bollywood', id:2},
    //     {name:'Tollywood', id:3},
    //     {name:'Religious', id:4},
    //     {name:'Funny', id:5},
    //     {name:'Cricket', id:6},
    //     {name:'Football', id:7},
    // ]
    return (
        <> 
            {/* {
                category.map((item)=>
                    <div className="Select-home-category">
                        <Link to={"/category/"+item.name} className="teop-s"><div className="Select-text-home">{item.name}</div></Link>
                    </div>
                )
            } */}

                    <div className="Select-home-category">
                        <Link to="/category/hollywood" className="teop-s"><div className="Select-text-home">Hollywood</div></Link>
                    </div>

                    <div className="Select-home-category">
                        <Link to="/category/bollywood" className="teop-s"><div className="Select-text-home">Bollywood</div></Link>
                    </div>
                        
                    <div className="Select-home-category">
                        <Link to="/category/dhallywood" className="teop-s"><div className="Select-text-home">Dhallywood</div></Link>
                    </div>
                           
                    <div className="Select-home-category">
                        <Link to="/category/hollywood" className="teop-s"><div className="Select-text-home">Hollywood</div></Link>
                    </div>
        </>
        
    )
}
export default SubCatContent
