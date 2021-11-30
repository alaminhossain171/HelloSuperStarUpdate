import React from 'react'
import AdminAddSession from './AdminAddsession'

const AddSession = () => {
return (
<>
    <div className="card ad-card">
        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
            data-bs-parent="#accordionExample">
            <div className="accordion-body">
               <AdminAddSession />
            </div>
        </div>
    </div>
</>
)
}

export default AddSession