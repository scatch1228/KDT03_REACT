import React from 'react'

const BTStyle = {
    blue : {base:"bg-blue-200", hover:"hover:bg-blue-300"},
    orange : {base:"bg-orange-300", hover:"hover:bg-orange-400"},
    lime : {base:"bg-lime-200", hover:"hover:bg-lime-300"},
}

export default function TailButton({color, text, onHandle }) {
    const btstyle1 = BTStyle[color];

    return (
        <div className='m-5'>
            <button className={`${btstyle1.base} rounded ${btstyle1.hover} px-4 py-2`} onClick={onHandle} >
                {text}
            </button>
        </div>
    )
}
