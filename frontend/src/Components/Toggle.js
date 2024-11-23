import React, { useState } from 'react';

function Toggle({ onToggle }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
    onToggle(isChecked); // Call the onToggle function if provided
  };

  return (
    <div>
        <label className="switch">
            <input type="checkbox" checked={isChecked} onChange={handleToggle} />
            <span className="slider"></span>
        </label>
        <style>{`
        /* From Uiverse.io by TimTrayler */ 
.switch {
 --secondary-container: #3a4b39;
 --primary: #84da89;
 font-size: 17px;
 position: relative;
 display: inline-block;
 width: 3.7em;
 height: 1.8em;
}

.switch input {
 display: none;
 opacity: 0;
 width: 0;
 height: 0;
}

.slider {
 position: absolute;
 cursor: pointer;
 top: 0;
 left: 0;
 right: 0;
 bottom: 0;
 background-color: #313033;
 transition: .2s;
 border-radius: 30px;
}

.slider:before {
 position: absolute;
 content: "";
 height: 1.4em;
 width: 1.4em;
 border-radius: 20px;
 left: 0.2em;
 bottom: 0.2em;
 background-color: #aeaaae;
 transition: .4s;
}

input:checked + .slider::before {
 background-color: var(--primary);
}

input:checked + .slider {
 background-color: var(--secondary-container);
}

input:focus + .slider {
 box-shadow: 0 0 1px var(--secondary-container);
}

input:checked + .slider:before {
 transform: translateX(1.9em);
}
        `}</style>
    </div>
    
  );
}

export default Toggle;
