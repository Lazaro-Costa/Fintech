import React from 'react'
import DataInput from './DateInput'
import { useData } from '../Context/DataContext'

const DateRange = () => {
  const {inicio, setInicio, final, setFinal} = useData()
  return (
    <form onSubmit={(e) => e.preventDefault()} className='box flex'>
      <DataInput label="Início" value={inicio} onChange={({target}) => setInicio(target.value)}/>
      {inicio}
      <DataInput label="Final" value={final} onChange={({target}) => setFinal(target.value)}/>
      {final}
    </form>
  )
}

export default DateRange
