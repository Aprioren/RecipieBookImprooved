import React from 'react';

interface ISkills{
  skills: string[];
};

export const ImprooveSkils:React.FC<ISkills> = ({skills}) => {

  return (
    <div className="improove-skils">
      <div className='improove-skils__column'>
        <img className='improove-skils-img' src={`${process.env.PUBLIC_URL}${"/img/hero-gallery/vegetables.jpg"}`} alt="waffle-hearts" />
      </div>
      <div className='improove-skils__column'>
        <h2 className='improove-skils__title'>Вдосконалюйся</h2>
        {skills.map((skill, index) => {
          return <p className='skills-item' key={index}>{ skill }</p>
        })}
        <button className='improove-skils__btn'>Зареєструватися</button>
      </div>
    </div>
  )
}