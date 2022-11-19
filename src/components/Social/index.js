import React from 'react';
import './styles.css';

const Social = ({ heading }) => {
  return (
    <>
      <h5 style={{ fontWeight: '600' }}><u>{heading}</u></h5>
      <div className='social-list'>
        <p style={{ flex: 0.5 }}><b>LinkedIn:</b> <input style={{marginLeft: '5%', width: '70%' }} /></p>
        <p style={{ flex: 0.5 }}><b>GitHub:</b> <input style={{marginLeft: '5%', width: '70%' }} /> </p>
      </div>
      <div className='social-list'>
        <p style={{ flex: 0.5 }}><b>Twitter:</b> <input style={{marginLeft: '5%', width: '70%' }} /> </p>
        <p style={{ flex: 0.5 }}><b>Website:</b> <input style={{marginLeft: '5%', width: '70%' }} /> </p>
      </div>
    </>
  )
}

export default Social;
