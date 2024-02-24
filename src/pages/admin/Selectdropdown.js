import React from 'react';
import 'C:/PMS/snp_tax/src/static/css/select.css'

function Selectdropdown() {
  return (
    <div className="selectinput-container col-12" >
      <div className='selectfield-container col-12'>
        <select type='text' style={{ height: '5vh', width: '100%', border: "2px solid rgb(100, 149, 237)", borderRadius: '10px', }}>
          <option>30 minutes</option>
          <option>4 hours</option>
          <option>8 hours</option>
        </select>
      </div>

    </div>
  )
}

export default Selectdropdown
