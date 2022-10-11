import React, { useState } from "react";

const Category = ({category, type, texture}) => {
    //const storeBuild = build(state => state);
    //const interBtn = interfaceButtons(state => state);

    /* const boulderTextureArr = [
        'rock_1'      
    ]

    //const miscTextureArr = [
        'torch'
    ] */

    /* const boulderButtons = boulderTextureArr.map((item, index) => {
        return (
            <div key={item+index} className={
                `${item} 
                ${
                    (interBtn.active && interBtn.button === item) ?
                'activeBtn' : 'objectsBtn'
                }`
            } onClick={() => handleObject(item) }>
            </div>
        )
    }) */

    const showTexture = texture.map((item, index) => {
        return (
            <div key={item+index} className={
                `${item} 
                ${
                    (interBtn.active && interBtn.button === item) ?
                'activeBtn' : 'objectsBtn'
                }`
            } onClick={() => handleObject(item) }>
            </div>
        )
    })

    const [objectSize, setObjectSize] = useState();
    const [active, setActive] = useState(false)

    const handleObject = (setTexture) => {
        if (active && interBtn.button === setTexture) {
            
            interBtn.btn(false, null)
            setActive(false);
            storeBuild.changeRaySize(setTexture === 'rock' ? 2 : 1, setTexture === 'rock' ? 2 : 1)
            storeBuild.changeActivateBuild(false);
        
        } else {
            
            interBtn.btn(true, setTexture);
            storeBuild.activeBuild('object', setTexture);
            storeBuild.changeRaySize(setTexture === 'rock' ? 2 : 1, setTexture === 'rock' ? 2 : 1, false)
            setActive(true)
        }
    }

    return (
        <>
            <div className='container'>
                <h2>{type}</h2>
                <div className = {category} >
                    {showTexture}
                </div>
            </div
        </>
    )
}

export default Category