import React from 'react'

export const Rules = ({data}) => {
  return (
    <div>
        <p dangerouslySetInnerHTML={{__html : data.instructions}} className='fs-6'></p>
    </div>
  )
}
