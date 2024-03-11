import React from 'react'

const InputType = ({
  labelText,
  lableFor,
  inputType,
  value,
  name,
  onChange}) => {
  return (
    <div className="col-12">
    <label htmlFor={lableFor} className="form-label">
     {labelText}
    </label>
    <input
      type={inputType}
      name={name}
      className="form-control"
      id={lableFor}
      
      onChange={onChange}
    />
    
  </div>
  )
}

export default InputType