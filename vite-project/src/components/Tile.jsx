import React from 'react'

export default function Tile({ TileData, flavour }) {
    return (

        <div className='w-auto rounded-full mb-1 text-center text-xs p-1' style={{
            background: `${flavour === 'light' ? 'white' : 'black'}`,
            color: `${flavour === 'light' ? 'black' : 'white'}`,
            border: `${flavour === 'light' ? '1px solid black' : '1px solid white'}`
        }}>
            <h1 className='uppercase'>{TileData}</h1>
        </div>
    )
}
