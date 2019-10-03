import React from "react";

import './styles.css'
function DisplayList(props) {
  
  return (
    <div className='ListCard'> 
      <ul>
        {props.List.map((value, index) => {
          return (
            <li key={index} >
                <a href="#" className='ListItem'><img className='ListImg' src={value.ImageUrl} alt=""></img>
              {value.Name}</a>
              
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default DisplayList;
