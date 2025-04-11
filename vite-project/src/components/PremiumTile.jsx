import React from 'react'

export default function PremiumTile({ name }) {
    return (
        <div className='flex w-auto justify-center mt-4 border border-yellow-300 bg-white text-black p-2 rounded-full'>
            <h1 className='text-lg uppercase font-bold'>{name}</h1>
        </div>
    )
}
