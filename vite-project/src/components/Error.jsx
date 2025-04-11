import React from 'react'

export default function Error({ errorMessage }) {
    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center p-2">
            <p className="text-lg text-red-500">{errorMessage}</p>
        </div>
    )
}
