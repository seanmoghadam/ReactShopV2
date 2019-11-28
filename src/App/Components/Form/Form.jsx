import React, { useState, useEffect } from 'react';

const Form = (props) => {
  
  const [formState, updateFormState] = useState(
    {
      firstName: "",
      lastName: ""
    }
  );
  
  const updateFirstName = (e) => {
    const inputValue = e.target.value;
    updateFormState({
      ...formState,
      firstName: inputValue,
    })
  };
  
  return <form>
    <h2>Form Component</h2>
    <label>Vorname</label>
    <input type="text" value={formState.firstName} onChange={updateFirstName}/>
  
  
  </form>
  
};
export default Form;
