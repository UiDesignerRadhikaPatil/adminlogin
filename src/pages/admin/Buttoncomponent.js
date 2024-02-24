import React from 'react';
import 'C:/PMS/snp_tax/src/static/css/buttoncomponent.css';

function Buttoncomponent() {
  return (
    <div className="button-container col-12">
      <div className='button-section col-12' >
        <div className='col-12' style={{display:'flex', justifyContent:'left', }}>
          <button style={{height:'6vh', width:'60%', border:'none', borderRadius:'10px',color:'white', background:'rgb(100, 149, 237)', transition: 'background-color 0.3s ease', cursor:'pointer', textAlign:'center' }}>Sign in </button>
        </div>
        
      
      </div>

    </div>
  )
}

export default Buttoncomponent
