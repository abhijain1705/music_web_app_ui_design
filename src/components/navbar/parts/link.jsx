import React from 'react'

const Link = ({ title, link }) => {
    return (
        <a href={`#${link}`} className="cursor-pointer hover:opacity-80">
            {title}
        </a>
    )
}

export default Link;