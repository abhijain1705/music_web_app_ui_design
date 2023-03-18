import React from 'react';
import FirstChild from './firstChild/firstChild';
import ForthChild from './forthChild/forthChild';
import SecondChild from './secondChild/secondChild';
import ThirdChild from './thirdChild/thirdChild';

const Home = () => {

    return (
        <div className='flex flex-col w-full mt-48 relative h-full'>
            <FirstChild />
            <SecondChild />
            <ThirdChild />
            <ForthChild />
        </div>
    )
}

export default Home;