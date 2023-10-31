import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

const Field = (props) => {
  return (
    <div className='data_val'>
        <h4>{props.name}</h4>
        <h4>{props.email}</h4>
        <button style={{backgroundColor: 'transparent',border: 'none',cursor:'pointer' }}><DeleteIcon /></button>
    </div>
  )
}

export default Field
