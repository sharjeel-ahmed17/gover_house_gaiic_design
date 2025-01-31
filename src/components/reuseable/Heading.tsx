import React from 'react'

const Heading = ({title } : {title : string}) => {
  return (
    <h2 className='text-2xl lg:text-3xl font-bold text-gray-900 capitalize'>{title}</h2>
  )
}

export default Heading