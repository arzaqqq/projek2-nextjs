import React from 'react'

function CardList({ children }: { children: React.ReactNode }) {
  return (
    <div className=' bg-black text-amber-50'>
        {/* <p className=' text-amber-200 text-5xl'>TES BRO</p> */}
        {children}
    </div>
  )
}

export default CardList
