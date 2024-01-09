import React, { useState } from 'react';
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const TruncatedText = ({text, limit}) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpansion = () => {
        setIsExpanded(!isExpanded);
    }

    const truncatedText = isExpanded ? text : `${text.split(' ').slice(0, limit).join(' ')}...`;
  return (
    <div className={`truncated-text ${isExpanded ? 'expanded' : ''}`}>
      <p>{truncatedText}</p>
      {text.split(' ').length > limit && (
        <p className='read-more' onClick={toggleExpansion}> {isExpanded ? <IoIosArrowUp /> : <IoIosArrowDown />} </p>
        // <button onClick={toggleExpansion}>
        //   {isExpanded ? 'Read less' : 'Read more'}
        // </button>
      )}
    </div>
  )
}

export default TruncatedText
