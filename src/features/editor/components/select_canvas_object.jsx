import React, { useState } from 'react'
import { Selection, EffectComposer, Outline } from '@react-three/postprocessing';
import { build } from '@store/editor';
import { useEffect } from 'react';

const SelectObject = () => {

    const storeBuild = build(state => state);

    return (
        <Selection>
            <EffectComposer multisampling={8} autoClear={false}>
                <Outline blur visibleEdgeColor="white" edgeStrength={100} width={1000} />
            </EffectComposer>

            {storeBuild.objects.map((item) => {
                return item.canvasObject
            })}

        </Selection>  
    )
}

export default SelectObject