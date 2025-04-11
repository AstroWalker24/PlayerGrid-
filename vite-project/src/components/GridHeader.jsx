import React from 'react'

export default function GridHeader( {teamLogo, teamName, SportName} ) {
  return (
    <div className='flex items-center p-4 bg-white shadow-md rounded-t-lg'>
            <img src={teamLogo} alt={teamName} className='w-14 h-14 object-cover rounded-full mr-4'/>
            <div>
                <h1 className='text-lg font-bold'>{teamName}</h1>
                <p className='text-sm text-gray-500'>{SportName}</p>
            </div>
    </div>
  )
}
