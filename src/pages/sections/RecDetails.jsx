import React from 'react'

export const RecDetails = ({ data }) => {
  return (
    <div>
      <ul className='d-flex flex-column flex-wrap' style={{"maxHeight":"200px"}}>

        {data.extendedIngredients.map((each) => {
          return (
            <>
              <li>{each.name}</li>
            </>
          )
        })}
      </ul>
    </div>
  )
}
