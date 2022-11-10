import { useState, useEffect } from 'react'
import { useThree } from '@react-three/fiber'

const useViewportScale = () => {

    const { viewport } = useThree()
    
    const [viewportScale, setViewportScale] = useState({
        width: 1,
        height: 1,
        depth: 1
    });

    return [[
        (viewport.width / 5) * viewportScale.width,
        viewportScale.height,
        viewportScale.depth
    ], setViewportScale]
}

export default useViewportScale