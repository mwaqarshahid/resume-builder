import React, { useState } from 'react';
import './styles.css';

const Skills = ({ heading, reCalculatePages }) => {

  const [skillsList, setSkillsList] = useState(['Communication', 'Critical Thinking']);

  const handleChangeInput = (e, index) => {
    const newSkillList = [...skillsList];
    newSkillList[index] = e.target.value;
    setSkillsList(newSkillList);
  }

  return (
    <>
      <h5 style={{ fontWeight: '600' }}><u>{heading}</u></h5>
      {
        skillsList.map((item, index) =>
        <span className='skill-box' key={index}>
          <input className='input-style' key={index} value={item} onChange={(e) => handleChangeInput(e, index)} />
          {index === skillsList.length - 1 && (
            <>
              <button className="skill-btn add" onClick={() => { reCalculatePages(); setSkillsList([...skillsList, 'Skill name'])} }>+</button>
            </>
          )}
          {skillsList.length > 2 && <button className="skill-btn delete" onClick={() => { reCalculatePages(); setSkillsList(skillsList.filter((_, idx) => index !== idx)) }}>-</button>}
        </span>
        )
      }
    </>
  )
}

export default Skills;
