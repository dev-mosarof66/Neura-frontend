import React from 'react'
import NotFound from '../../assets/error.svg'

const Error = () => {
    console.log(NotFound);
    
    return (
        <div className='w-full h-screen gradient-mesh flex flex-col items-center justify-center'>

            <div>
                <img className='w-72 xs:w-96' src={NotFound} />
            </div>
            <h1 className='text-base font-bold xs:text-xl text-gray-500'>PAGE NOT FOUND</h1>
        </div>
    )
}

export default Error