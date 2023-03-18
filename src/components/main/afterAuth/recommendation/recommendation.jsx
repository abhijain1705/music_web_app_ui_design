import React from 'react';
import RecommendPart from '../parts/recommendPart';

const Recommendation = () => {

    const firstRowArray = [
        {
            songName: 'On my way',
            artist: 'Alan Walker'
        },
        {
            songName: 'Dark Side',
            artist: 'Alan Walker'
        },
        {
            songName: 'Sweet Dreams',
            artist: 'Alan Walker'
        },
        {
            songName: 'Play',
            artist: 'Alan Walker'
        },
        {
            songName: 'Alone',
            artist: 'Alan Walker'
        }
    ];

    return (
        <div className='flex flex-col w-full mt-48 relative h-full'>
            <div className='text-[#3E2424] text-center mb-8 text-[40px]'>More <span className='font-[600]'>Recommendations</span> you might like..</div>
            <div className='w-[55%] flex flex-col gap-8 mx-auto my-8'>
                <RecommendPart label={'The Matched ones'} array={firstRowArray} />
            </div>
            <div className='w-[55%] flex flex-col gap-8 mx-auto my-8'>
                <RecommendPart label={'Same Artists'} array={firstRowArray} />
            </div>
            <div className='w-[55%] flex flex-col gap-8 mx-auto my-8'>
                <RecommendPart label={'Same Tempos'} array={firstRowArray} />
            </div>
            <div className='w-[55%] flex flex-col gap-8 mx-auto my-8'>
                <RecommendPart label={'Same Tempos'} array={firstRowArray} />
            </div>
        </div>
    )
}

export default Recommendation;