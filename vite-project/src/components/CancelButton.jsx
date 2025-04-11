import React from 'react'

import Cancel from '../assets/Cancel_Button.svg'

export default function CancelButton({onClose}) {
  return (
    <button className='text-2xl' onClick={onClose}><img src={Cancel} alt="" width={30} height={30} /></button>
  )
}
