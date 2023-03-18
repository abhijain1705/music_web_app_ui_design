import React from "react";

const Line = ({ lineNumber }) => {
    return (
        <div
            className={`w-[200vw] absolute bg-black h-[6px] ${lineNumber == 1
                ? "rotate-180"
                : lineNumber == 2
                    ? "rotate-[60deg]"
                    : lineNumber == 3
                        ? "rotate-[120deg]"
                        : lineNumber === 4 ? "rotate-[156deg] w-[150vw]" : "w-[150vw] rotate-[26deg]"
                }`}
        ></div>
    );
};

export default Line;
