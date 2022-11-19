import React, { useState } from 'react';
import './styles.css';

const Header = () => {

  const [resumePhoto, setResumePhoto] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState('3336666147');
  const [location, setLocation] = useState('');

  const handleImageChange = event => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setResumePhoto(img);
    }
  };

  return(
    <>
      <div className='list-container'>
        <div style={{ flex: 0.7 }}>
          <h2 className='resume-title'>Muhammad Waqar Shahid</h2>
          <select className='without-icon'>
            <option>Job Function</option>
            <option value="1">Accountant</option>
            <option value="2">Engineering</option>
            <option value="3">After sales and Repair</option>
          </select>
          <div className='list-container'>
            <label style={{ flex: 0.3 }}><b>Email</b></label>
            <input style={{ flex: 0.7, width: '60%', cursor: 'pointer' }}
              value={'waqar-shahid@hotmail.com'} readOnly />
          </div>
          <div className='list-container'>
            <label style={{ flex: 0.3 }}><b>Phone</b></label>
            <input style={{ flex: 0.7, width: '60%' }} placeholder='Phone'
              value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
          </div>
          <div className='list-container'>
            <label style={{ flex: 0.3 }}><b>Location</b></label>
            <input style={{ flex: 0.7, width: '60%' }} placeholder='Location'
              value={location} onChange={(e) => setLocation(e.target.value)} />
          </div>
        </div>
        <div style={{ flex: 0.3 }}>
          {
            resumePhoto !== null && <img src={resumePhoto} alt=" " />
          }
          <input className='image-background' type={'file'} onChange={handleImageChange} />
        </div>
      </div>
      <hr className='line-break' />
    </>
  )
}

export default Header;
