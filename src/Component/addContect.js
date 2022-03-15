import React from 'react'

const AddContect = () => {
  return (
    <>
      <div className='mb-3'>
        <label htmlFor="name" className='form-label'>Name</label>
        <input type="text" className='form-control' id='name' placeholder='Enter the Name'/>
      </div>
      <div className='mb-3'>
        <label for="email" className='form-label'>Email</label>
        <input type="email" className='form-control' id='email' placeholder='Enter the Email'/>
      </div>
      <button type='button' className='btn btn-outline-primary'>Save</button>
      
    </>
  )
}

export default AddContect