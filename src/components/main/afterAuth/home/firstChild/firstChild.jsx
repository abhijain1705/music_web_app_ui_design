import React from 'react';
import singer1 from '../../../../../assets/singer1.png';
import singer2 from '../../../../../assets/singer2.png';
import singer3 from '../../../../../assets/singer3.png';
import ArtistButton from '../../parts/artistButton';

const FirstChild = () => {
    return (
        <div id='Home' className='flex w-full h-max min-h-[450px] lg:min-h-[550px] relative'>
            {/* small size content */}
            <div className='lg:hidden flex flex-col w-max mx-auto'>
                <div className="mr-auto flex items-center justify-between px-4 py-2 rounded-[30px] mt-4 bg-[#2A1E1E] w-max h-max text-white">
                    <ArtistButton label={'Listen to Alan Walker'} />
                </div>
                <div className="mr-auto flex items-center justify-between px-4 py-2 rounded-[30px] mt-4 bg-[#2A1E1E] w-max h-max text-white">
                    <ArtistButton label={'Listen to Alan Walker'} />
                </div>
                <div className="mr-auto flex items-center justify-between px-4 py-2 rounded-[30px] mt-4 bg-[#2A1E1E] w-max h-max text-white">
                    <ArtistButton label={'Listen to Alan Walker'} />
                </div>
            </div>
            {/* big size content */}
            <div className='flex px-4 flex-col absolute bottom-0 left-0 right-[10rem] md:right-[20rem] lg:right-[30rem] 2xl:right-[35rem] h-[100%] items-center justify-between'>
                <div className="lg:opacity-100 opacity-0 md:mr-auto lg:mr-0 flex items-center justify-between px-4 py-2 rounded-[30px] mt-4 bg-[#2A1E1E] w-max h-max text-white">
                    <ArtistButton label={'Listen to Alan Walker'} />
                </div>
                <img className='w-[100px] md:w-[200px] lg:w-[300px] 2xl:w-[400px] z-10' alt='singer1' src={singer1} />
            </div>
            <div className='flex flex-col absolute bottom-0 left-0 right-0 h-[100%] items-center justify-between'>
                <div className="lg:opacity-100 opacity-0 flex items-center justify-between px-4 py-2 rounded-[30px] mt-4 bg-[#2A1E1E] w-max h-max text-white">
                    <ArtistButton label={'Listen to Alan Walker'} />
                </div>
                <img className='w-[100px] md:w-[200px] lg:w-[300px] 2xl:w-[400px] z-20' alt='singer2' src={singer2} />
            </div>
            <div className='flex px-4 flex-col absolute bottom-0 left-[10rem] md:left-[20rem] lg:left-[30rem] 2xl:left-[40rem] right-0 h-[100%] items-center justify-between'>
                <div className="lg:opacity-100 opacity-0 flex lg:ml-0 md:ml-auto items-center justify-between px-4 py-2 rounded-[30px] mt-4 bg-[#2A1E1E] w-max h-max text-white">
                    <ArtistButton label={'Listen to Kygo George'} />
                </div>
                <img className='w-[100px] md:w-[200px] lg:w-[300px] 2xl:w-[400px] z-10' alt='singer3' src={singer3} />
            </div>
            <h3 id='rhyme' className='absolute bottom-28 md:bottom-10 left-0 w-[300px] whitespace-normal md:whitespace-nowrap md:w-max mx-auto right-0 text-black md:text-white z-30 text-[20px] lg:text-[30px] 2xl:text-[40px] font-[400]'>ANY ARTIST, ANY SUBGENRE, ANY SONG</h3>
        </div>
    )
}

export default FirstChild;