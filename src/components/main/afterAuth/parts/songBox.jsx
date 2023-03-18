import React from 'react'

const SongBox = ({ songName, artist }) => {
    return (
        <div className='flex text-[#3E2424] w-max mx-auto flex-col items-center justify-center gap-1'>
            <div className='w-[100px] h-[100px] bg-[#3E2424] rounded-md'></div>
            <span className='font-[600] text-[14px]'>{songName}</span>
            <span className='font-[600] text-[10px]'>{artist}</span>
        </div>
    )
}

export default SongBox;