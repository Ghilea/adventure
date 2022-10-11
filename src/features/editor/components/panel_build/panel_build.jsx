import React, { useState } from "react";
import './panel_build.scss';

const Category = ({type, texture, blockSize}) => {

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
        <div className={`${type.open ? 'buildPanel' : 'disable'}`}>
            
            <div className='container'>
                <h2>{type.title}</h2>
                <div className={type.class} >
                   
                </div>
            </div>

        </div>
    )
}

export default Category