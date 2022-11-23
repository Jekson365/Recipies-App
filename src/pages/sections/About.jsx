import React from 'react'

export const About = ({data}) => {
  return (
    <div>
        <p dangerouslySetInnerHTML={{ __html: data.summary }} style={{ "fontSize": "13px" }}></p>
    </div>
  )
}
