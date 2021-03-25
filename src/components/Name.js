import React from 'react';
import MiddleName from './../secondComponents/MiddleName';

const Name = function(props){
    return(
      <div style={{ background: "#f0f0f0", border: 1, margin: 5 }}>
        <p>hello {props.name} </p>
        <MiddleName middleName={props.name}/>
        {props.age}
      </div>
    )
}
  
export default Name;