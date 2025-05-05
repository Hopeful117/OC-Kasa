import { useState } from 'react';
import upIcon from "../images/up.png";



export default function DropdownButton({ label, items }) {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);

const toggleDropdown = () => {
  if (open) {
    setClosing(true);
    setTimeout(() => {
      setOpen(false);
      setClosing(false);
    }, 150); 
  } else {
    setOpen(true);
  }
};


  return (
    <div className="dropdown">
      <button onClick={toggleDropdown} className="dropdown-button" aria-expanded={open}>
        <div>{label}</div> <div><img src={upIcon} className={`dropdown-icon ${open ? "rotated" : ""}`}/></div>
      </button>
      {(open || closing) && (
        
        <ul className={`dropdown-menu ${closing ? "closing":"opening"} `}>
          {items.map((item, index) => (
            <li key={index} onClick={() => setOpen(false)}>
              {item}
            </li>
          ))}
        </ul>
        
      )}
    </div>
  );
}
