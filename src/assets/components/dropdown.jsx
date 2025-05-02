import { useState } from 'react';
import upIcon from "../images/up.png";
import downIcon from "../images/down.png";


export default function DropdownButton({ label, items }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="dropdown">
      <button onClick={() => setOpen(!open)} className="dropdown-button">
        <div>{label}</div> <div><img src={open ? downIcon:upIcon}/></div>
      </button>
      {open && (
        <ul className="dropdown-menu">
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
