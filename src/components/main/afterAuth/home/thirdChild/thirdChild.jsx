import React from 'react'
import SearchInput from '../../parts/searchInput';
import SongBox from '../../parts/songBox';
import ArtistButton from '../../parts/artistButton';
import SubmitButton from '../../parts/submitButton';
import { useNavigate } from 'react-router-dom';

const ThirdChild = () => {

    const navigate = useNavigate();

    return (
        <div className='w-full relative min-h-[600px] h-full flex flex-col items-center gap-12 justify-center'>
            <div className='hidden md:block bg-black h-[5px] w-[300px] absolute right-0 top-24'></div>
            <div className='relative'>
                <h1 className='text-[30px] text-[#3E2424] font-[400]'>The Song belongs to <span className='font-bold'>Reverbed Category</span></h1>
                <div className='hidden md:block bg-black h-[5px] w-[300px] absolute right-0 bottom-0'></div>
            </div>
            <div className='w-full flex md:flex-row flex-col justify-center items-center gap-2'>
                <SearchInput />
                <SubmitButton label={'Submit another'} />
            </div>
            <div className='flex items-center gap-2 md:flex-row flex-col'>
                <span className='text-[#3E2424] font-[600] text-[25px]'>Similar songs you must listen</span>
                <div className='bg-black h-[2px] w-[320px]'></div>
            </div>
            <div className='flex gap-[2rem] flex-wrap'>
                {[1, 2, 3, 4, 5].map((itm, ind) => (
                    <SongBox key={ind} songName={`Song ${itm}`} artist={'info'} />
                ))}
            </div>
            <div onClick={() => navigate('/recommend')} className="mx-auto flex items-center justify-between px-4 py-2 rounded-[30px] mt-4 bg-[#2A1E1E] w-max h-max text-white">
                <ArtistButton label={'Recommend similar songs'} />
            </div>
        </div>
    )
}

export default ThirdChild;