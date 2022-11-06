import { useState, useMemo } from 'react'
import { Selection, EffectComposer, Outline } from '@react-three/postprocessing';
import { build } from '@store/editor';

const SelectObject = () => {

    const storeBuild = build(state => state);
    const [showObjects, setShowObjects] = useState([]);

    useMemo(() => {
        console.log(storeBuild.objects)

        

    }, [storeBuild.objects])

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