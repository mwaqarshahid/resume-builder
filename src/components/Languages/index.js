import React, { useState } from 'react';
import './styles.css';

const Languages = ({ heading }) => {

  const [languagesList, setlanguagesList] = useState(['English']);

  const handleChangeInput = (e, index) => {
    const newList = [...languagesList];
    newList[index] = e.target.value;
    setlanguagesList(newList);
  }

  return (
    <>
      <h5 style={{ fontWeight: '600' }}><u>{heading}</u></h5>
      {
        languagesList.map((item, index) =>
        <span className="skill-box" key={index}>
          <input className='input-style' key={index} value={item} onChange={(e) => handleChangeInput(e, index)} />
          {index === languagesList.length - 1 && (
            <>
              <button className="skill-btn add" onClick={() => setlanguagesList([...languagesList, 'Language'])}>+</button>
            </>
          )}
          {languagesList.length > 1 && <button className="skill-btn delete" onClick={() => setlanguagesList(languagesList.filter((_, idx) => index !== idx))}>-</button>}
        </span>
        )
      }
    </>
  )
}

export default Languages;
