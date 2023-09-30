import React from 'react'

type IDateInput = React.ComponentProps<'input'> &{
  label: string;
}

const DataInput = ({label, ...props}: IDateInput) => {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input id={label} name={label} type="date" {...props}/>
    </div>
  )
}

export default DataInput
