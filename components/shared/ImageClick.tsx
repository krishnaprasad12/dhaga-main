"use client"

import Image from "next/image";
import { useState } from "react";

function ImageClick()
{
    const [isLiked, setIsLiked] = useState(false);
    const handleLikeClick = () => {
        setIsLiked(!isLiked);
    };
    return (
        <button onClick={handleLikeClick}>
            <Image
                src={isLiked ? '/assets/heart-filled.svg' : '/assets/heart-gray.svg'}
                alt='heart'
                width={24}
                height={24}
                className='cursor-pointer object-contain'
            />
        </button>
    )
}

export default ImageClick;