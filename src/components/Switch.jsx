import React, { useState } from 'react';

const Switch = () => {
  const [isToggled, setIsToggled] = useState(false);

  const sliderStyles = {
    position: 'absolute',
    cursor: 'pointer',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: isToggled ? '#2196F3' : '#ccc',
    transition: '.4s',
    borderRadius: '34px',
  };

  const sliderBeforeStyles = {
    position: 'absolute',
    content: '""',
    height: '16px',
    width: '16px',
    left: '4px',
    bottom: '4px',
    backgroundColor: 'white',
    transition: '.4s',
    borderRadius: '50%',
    transform: isToggled ? 'translateX(26px)' : 'none',
  };

  const switchStyles = {
    position: 'relative',
    display: 'inline-block',
    width: '50px',
    height: '24px',
    marginBottom: '10px',
  };

  const onToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <label style={switchStyles}>
      <input
        type="checkbox"
        checked={isToggled}
        onChange={onToggle}
        style={{ opacity: 0, width: 0, height: 0 }}
      />
      <span style={sliderStyles}>
        <span style={sliderBeforeStyles}></span>
      </span>
    </label>
  );
};

export default Switch;
