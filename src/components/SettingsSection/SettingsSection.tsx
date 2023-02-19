import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

// interface IColor{
//   item: string[];
// }

const colors = [
  'rgb(255, 0, 86)',
  'rgb(33,150,243)',
  'rgb(255,193,7)',
  'rgb(156,39,176)',
  'rgb(0,200,83)',
];

const fontSizesOption = [
  {
    title: 'Маленький',
    value: '12px',
  },
  {
    title: 'Середній',
    value: '16px',
  },
  {
    title: 'Великий',
    value: '20px',
  }
];
const themes = [
  {
    '--background-color': '#fff',
    '--background-lite': '#fff',
    '--shadow-color': 'rgba(0,0,0,0.2)',
    '--text-color': '#0A0A0A',
    '--text-light': '#575757',
  },
  {
    '--background-color': '#0f0b0f',
    '--background-lite': 'rgb(77,77,77)',
    '--shadow-color': 'rgba(0,0,0,0.2)',
    '--text-color': '#FFFFFF',
    '--text-light': '#eceaea',
  },
]

export const SettingsSection: React.FC = () => {
  const [settings, setSettings] = useState({
    '--background-color': '#fff',
    '--background-lite': '#fff',
    '--shadow-color': 'rgba(0,0,0,0.2)',
    '--primary-color': 'rgb(255,0,86)',
    '--text-color': '#0A0A0A',
    '--text-light': '#575757',
    '--font-size': '16px',
    '--animation-speed': '1',
  });
  const [theme, setTheme] = useState('light');
  const [primaryColor, setPrimaryColor] = useState(0);
  const [fontSizes, setFontSizes] = useState(1);

  const changeTheme = (index) => {
    const option = { ...themes[index] };
    
    setTheme(index === 0 ? 'light' : 'dark');
    let _settings = { ...settings };

    for (let key in option) {
      _settings[key] = option[key];
    };
    setSettings(_settings);
  };

  const changeColor = (index) => {
    const _color = colors[index];
    let _settings = { ...settings };
    _settings['--primary-color'] = _color;
    setPrimaryColor(index);
    setSettings(_settings);
  };

  const changeFontSize = (index) => {
    const _size = fontSizesOption[index];
    let _settings = { ...settings };
    _settings['--font-size'] = _size.value;
    setFontSizes(index);
    setSettings(_settings);
  }

  useEffect(() => {
    const root = document.documentElement;
    for (const key in settings) {
      root.style.setProperty(key, settings[key])
    }
  }, [settings]);

  return (
    <div>
      <div className="setting-section">
        <h2 className="setting-section__title">Бажана тема</h2>
        <div className="option-container">
          <div className="option light" onClick={()=> changeTheme(0)}>
            {theme === 'light' && (
              <button type='button' className='options-btn light checked'>
                <FontAwesomeIcon className='icon-btn' icon={faCheck}/>
              </button>
            )}
          </div>
          <div className="option dark" onClick={()=> changeTheme(1)}>
            {theme === 'dark' && (
              <button type='button' className='options-btn dark'>
                <FontAwesomeIcon className='icon-btn' icon={faCheck}/>
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="setting-section">
        <h2 className="setting-section__title">Основний колір</h2>
        <div className="option-container">
          {colors.map((color, index) => (
             <div className="option light" style={{backgroundColor: color}} key={index} onClick={()=> changeColor(index)}>
                {primaryColor === index && (
                  <button type='button' className='options-btn light checked'>
                    <FontAwesomeIcon className='icon-btn' icon={faCheck}/>
                  </button>
                )}
              </div> 
          ))}
        </div>
      </div>
      <div className="setting-section">
        <h2 className="setting-section__title">Розмір шрифта</h2>
        <div className="option-container">
          {fontSizesOption.map((size, index) => (
            <button className='fontSize-btn' key={index} onClick={()=> changeFontSize(index)}>
              {size.title}
              {fontSizes === index && <FontAwesomeIcon className='fontSize-icon' icon={faCheck}/>}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}