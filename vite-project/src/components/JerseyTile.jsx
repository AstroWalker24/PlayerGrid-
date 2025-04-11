import React from 'react'

export default function JerseyTile( {JerseyNumber} ) {
    return (
        <div className='text-center w-1/3 mr-2 bg-black text-white p-2 h-24 flex items-center justify-center text-6xl border border-white rounded-full'>
            {JerseyNumber}
        </div>
    )
}
