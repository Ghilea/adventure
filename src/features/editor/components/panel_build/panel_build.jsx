import React, { useEffect, useState } from "react";
import { CategoryObjects } from "@editor/interface/category/categoryObjects";
import './panel_build.scss';

const Category = ({type, texture, blockSize}) => {

    console.log(type)
    //const [objectSize, setObjectSize] = useState();
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

    /* const showTexture = texture.map((item, index) => {
        return (
            <div
                key={item + index}
                className={`${item} ${(active) ? 'activeBtn' : 'objectsBtn'}`}
                onClick={handleClick}>
            </div>
        )
    }) {showTexture}
 */
    return (
        <div className='buildPanel'>
            
            <div className='container'>
                <h2>{type}</h2>
                <div className={type} >
                   
                </div>
            </div>

        </div>
    )
}

export default Category