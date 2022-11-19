import React, { useState } from 'react';
import "./style.css"

const OneLinerComponent = ({ heading, placeholder, description }) => {
  const [inputText, setInputText] = useState(
    'I do hereby declare that all the details mentioned above are accurate to the best of ' +
    'my familiarity and confidence.'
  );
  return(
    <>
      <h5 style={{ fontWeight: '600' }}><u>{heading}</u></h5>
      {
        description ?
        <>
          <textarea rows="2" value={inputText} onChange={(e) => setInputText(e.target.value) }/>
          <p>{description}</p>
          <p>{placeholder && placeholder}</p>
        </> :
        <input placeholder={placeholder} />
      }
    </>
  )
}

export default OneLinerComponent;
