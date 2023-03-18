import React from 'react'

const SubmitButton = ({label}) => {
    return (
        <button className={`min-w-[120px w-max p-2 h-[50px] rounded-full bg-white text-black`}>{label}</button>
    )
}

export default SubmitButton;