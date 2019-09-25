import React from 'react';

import './RadioButton.scss';

const RadioButton = ({ value, selected, index, onClick }: any) => (
  <button className="RadioButton" type="button" onClick={() => onClick(index)}>
    <svg className="radio-background" height="50" width="50">
      <circle cx="25" cy="25" r="20" stroke="#EFE7E7" strokeWidth="3" fill="#00000000" />
      <circle cx="25" cy="25" r="14" stroke="#EFE7E7" fill="#FFFFFF" style={selected === index ? {} : { display: 'none' }} />
    </svg>
    <div className="radio-textwrap">
      { value }
    </div>
  </button>
);

export default RadioButton;
