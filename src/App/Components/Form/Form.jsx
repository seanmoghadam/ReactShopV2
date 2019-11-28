import React from 'react';

const Form = (props) => {
  
  return <div>
    <h2>Form Component</h2>
    <input type="text"
           value={props.title}
           onChange={props.updateTitle}/>
    
  </div>
  
};
export default Form;
