import React from "react";
import SubmitButton from "../../parts/submitButton";

const ForthChild = () => {
    return (
        <div id='search' className="w-full relative min-h-[600px] h-full flex flex-col items-center gap-12 justify-center">
            <div className="hidden md:block bg-black h-[5px] w-[300px] absolute left-0 top-8"></div>
            <div className="hidden md:block bg-black h-[5px] w-[300px] absolute right-0 top-20"></div>
            <h3 className="text-[#3E2424] text-[30px] font-bold" >Search for you song</h3>
            <div className="flex items-center gap-4">
                <input type={'search'} className='h-[50px] p-2 rounded-full w-[300px]' placeholder='Type your song here' />
                <SubmitButton label={'Submit'} />
            </div>
            <div className="hidden md:block bg-black h-[5px] w-[300px] absolute left-0 bottom-8"></div>
            <div className="hidden md:block bg-black h-[5px] w-[300px] absolute right-0 bottom-20"></div>
        </div>
    );
};

export default ForthChild;
