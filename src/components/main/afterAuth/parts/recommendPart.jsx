import React from "react";
import SongBox from "./songBox";

const RecommendPart = ({ array, label }) => {
    return (
        <>
            <div className="flex md:flex-row flex-col items-center justify-between gap-3">
                <div className="text-[#3E2424] font-[600]">{label}</div>
                <div className="md:w-[40%] xl:w-[70%] w-[320px] h-[3px] bg-[#3E2424]"></div>
            </div>
            <div className="flex gap-[2rem] flex-wrap">
                {array.map((itm, ind) => (
                    <SongBox key={ind} songName={itm.songName} artist={itm.artist} />
                ))}
            </div>
        </>
    );
};

export default RecommendPart;
