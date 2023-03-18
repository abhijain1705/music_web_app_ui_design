import React from 'react';
import music from '../../../../../assets/music.png';
import SearchInput from '../../parts/searchInput';
import SubmitButton from '../../parts/submitButton';

const SecondChild = () => {
    return (
        <div id='upload' className='w-full relative min-h-[600px] h-full flex flex-col items-center gap-12 justify-center'>
            <div className='hidden md:block bg-black h-[5px] w-[300px] absolute right-0 top-24'></div>
            <div className='hidden md:block bg-black h-[5px] w-[300px] absolute left-0 bottom-24'></div>
            <img alt='music1' src={music} className='w-[40px] absolute h-[40px] top-28 left-12' />
            <img alt='music2' src={music} className='w-[40px] absolute h-[40px] top-32 right-24' />
            <div className='flex absolute bottom-24 right-20'>
                <img alt='music1' src={music} className='w-[30px] h-[30px]' />
                <img alt='music1' src={music} className='w-[30px] h-[30px]' />
            </div>
            <div className='flex absolute bottom-28 left-20'>
                <img alt='music1' src={music} className='w-[30px] h-[30px]' />
                <img alt='music1' src={music} className='w-[25px] h-[25px]' />
                <img alt='music1' src={music} className='w-[20px] h-[20px]' />
            </div>
            <h1 className='text-[30px] font-[600]'>Upload the song to know the genre</h1>
            <SearchInput />
            <SubmitButton label={'Submit'} />
        </div>
    )
}

export default SecondChild;