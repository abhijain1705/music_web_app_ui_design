import React from 'react'

const SearchInput = () => {
    return (
        <div className='-[300px] md:w-[400px] relative'>
            <input type={'text'} className='w-full pr-[120px] h-[50px] rounded-full p-2' placeholder='Select a song...' />
            <button className='bg-[#DDDDDD] text-black p-2 h-[40px] top-[5px] rounded-full min-w-[100px] absolute right-[10px]'>browse</button>
        </div>
    )
}

export default SearchInput;