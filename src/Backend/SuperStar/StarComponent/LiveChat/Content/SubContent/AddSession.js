import React from 'react'
import SuperstarAddSession from './SuperstarAddSession';
import '../../../../../Admin/Component/Home/LiveChat/Content/SubContent/AddSession.css'

const AddSession = () => {
return (
<>
    <div className="card ad-card">
        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
            data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <SuperstarAddSession />
            </div>
        </div>
    </div>
</>
)
}

export default AddSession