import React, { useState } from 'react';
import './styles.css'

const MultiLinerComponent = ({ heading, type }) => {
  let defaultObj;
  const isAcademic = type === 'academic';
  if (isAcademic) {
    defaultObj = {
      title: 'Project Title',
      role: 'Role',
      university: 'University',
      location: 'Location',
      detail: 'Enter Details About Your Project Here'
    }
  } else {
    defaultObj = {
      role: 'Role',
      company: 'Company',
      location: 'Location',
      detail: 'Enter Details About Your Work Responsibilities Here'
    }
  }

  const [list, setList] = useState([defaultObj || {}]);

  return (
    <>
      <h5 style={{ fontWeight: '600' }}><u>{heading}</u></h5>
        {
          list.map((item, index) =>
            <span className='multi-input-box' key={index}>
              {index === list.length - 1 && (
                <>
                  <button className="multi-input-btn add" onClick={() => setList([...list, defaultObj ])}>+</button>
                </>
              )}
              {list.length > 1 && <button className="multi-input-btn delete" onClick={() => setList(list.filter((_, idx) => index !== idx))}>-</button>}
              <div style={{ marginTop: 3 }}>
                <div className='title'>
                  <div style={{ flex: 0.72 }}>
                    <input placeholder={isAcademic ? item.title : item.role} />
                  </div>
                  <div style={{ flex: 0.25 }}>
                    <span>Start Date - </span>
                    <span>End Date</span>
                  </div>
                </div>
                {
                  isAcademic ?
                  <>
                    <input placeholder={item.role} />
                    <input placeholder={item.university} />
                  </> :
                  <input placeholder={item.company} />
                }
                <input placeholder={item.location} />
                <input placeholder={item.detail} />
              </div>
            </span>
          )
        }
    </>
  )
}

export default MultiLinerComponent;
