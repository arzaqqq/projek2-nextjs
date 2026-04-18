import React, { Children } from 'react'

const CardList =({children} : any) => {
  return (
    <div className=' bg-green-500'>
        <p className=' text-amber-200 text-5xl'>TES BRO</p>
        {children}
    </div>
  )
}

export default CardList
 