import React from 'react'
import profile from '../assets/contect2.png'

const ContectList = (props) => {
  const list = props.contect.map((contact)=>{
    return (
      <div className='container'>
      <div className='row'>
        <div className='col-2'>
          <img className="navbar-brand" src={profile} alt=""/> 
        </div>
        <div className='col'>
          <div className='row'>
            <p className='fw-bold'>{contact.name}</p>
          </div>
          <div className='row'>
            <p className='fst-italic'>{contact.email}</p>
            <a href='/'>F2ED</a>
          </div>
        </div>
      </div>
    </div>
    );
  });
  return (
    <>
      {list}
    </>
  )
}

export default ContectList