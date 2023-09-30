import React from 'react'
import DataInput from './DataInput'

const DateRange = () => {
  const [inicio, setInicio] = React.useState('')
  const [final, setFinal] = React.useState('')
  return (
    <form onSubmit={(e) => e.preventDefault()} className='box flex'>
      <DataInput label="Início" value={inicio} onChange={({target}) => setInicio(target.value)}/>
      <DataInput label="Final" value={final} onChange={({target}) => setFinal(target.value)}/>
    </form>
  )
}

export default DateRange
