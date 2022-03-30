import React from 'react'
import FloatingButton from 'components/Atom/FloatingButton'

export default function Card({className, item}) {
  return (
    <div className={`relative border cursor-pointer aspect-video ${className}`}>
      <div className='z-0'> </div>
      <p className='absolute bottom-0 left-0 z-10 p-3 text-sm font-semimedium'>{item.channel}</p>
      {/* <FloatingButton /> */}
    </div>
  )
}
