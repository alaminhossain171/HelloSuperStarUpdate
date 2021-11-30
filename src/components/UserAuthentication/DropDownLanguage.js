import React from 'react'
// import {ButtonGroup,Button,Dropdown} from 'react-bootstrap';
import '../CSS/DropDownLanguage/DropDownLanguage.css'
function DropDownLanguage() {
  return (
    <>
      <div>
        <select className="custom-select">
          <option value="0" style={{ color: 'white' }}>Language</option>
          <option value="1">English</option>
          <option value="2">Hindi</option>
          <option value="3">Bangla</option>

        </select>
      </div>
      {/* <Dropdown as={ButtonGroup} className=' '>
  <Button className='btn btn-dark bg-dark btn-head'>Language</Button>

  <Dropdown.Toggle split className='bg-dark btn-dark dropdown-size' id="dropdown-split-basic" />


 <Dropdown.Menu className='bg-dark btn-head dropDown-size text-center' >
    <Dropdown.Item className='text-warning ' href="#/action-1">English</Dropdown.Item>
    <Dropdown.Item className='text-warning' href="#/action-2">Bangla</Dropdown.Item>
    <Dropdown.Item className='text-warning' href="#/action-3">Hindi</Dropdown.Item>
  </Dropdown.Menu>

</Dropdown> */}
    </>
  )
}

export default DropDownLanguage
