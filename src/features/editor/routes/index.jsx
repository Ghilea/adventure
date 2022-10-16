import React, { useEffect, useState } from 'react';
import Canvas from '@editor/editor_canvas';
import TopPanel from '../panel_top';
import RightPanel from '../panel_right';
import { build } from '@store/editor';

const Index = () => {
    
    //stores
    const storeBuild = build(state => state);
        
    useEffect(() => {
        if (storeBuild.active.length > 0 && storeBuild.selected !== null) {
            storeBuild.selectedObject(null)
            console.log('reset')
        }
    }, [storeBuild.active])

    
    useEffect(() => {
        console.log('object', storeBuild.object)
    }, [storeBuild.object])

    /*useEffect(()=> {

        if(storeBuild.remove !== null){
            setObj(obj.filter((item) => {
                return item.props.objectId !== storeBuild.remove
            }))
        }

    }, [storeBuild.remove])*/

    return (
        <>
            <TopPanel />
            <RightPanel />
            <Canvas />
        </>    
    )
}

export default Index