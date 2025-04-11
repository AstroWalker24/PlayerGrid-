import React from 'react';
import CancelButton from './CancelButton';

export default function CardHeader({SportName, onClose}) {
    return (
        <div className='flex justify-end items-center w-full'>
            <div className='mr-4 mt-4'>
                <CancelButton onClose={onClose}/>
            </div>
        </div>
    )
}
