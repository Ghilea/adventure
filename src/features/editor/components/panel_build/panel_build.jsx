import React, { useEffect, useState } from "react";

const Category = ({
    title, 
    className, 
    object=[], 
    blockSize
}) => {

    const [objectSize, setObjectSize] = useState();
    const [active, setActive] = useState(false)

    const handleClick = () => {
        if (active) {
            setActive(false);
            setObjectSize(0, 0)
        } else {
            setActive(true)
            setObjectSize(blockSize, blockSize)
        }
    }

    const content = object.map((item, index) => {
        return (
            <div
                key={item + index}
                className={`${item} ${(active) ? 'activeBtn' : 'objectsBtn'}`}
                onClick={handleClick}>
            </div>
        )
    })
 
    return (
        
            
            <div className='container'>
                <h2>{title}</h2>
                <div className={className} >
                   {content}
                </div>
            </div>

        
    )
}

export default Category