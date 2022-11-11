import React from 'react'
import { build } from '@store/editor';
import img_btn from "@assets/images/icons/panel/rock_1.png";

const BuildButton = ({
    children,
    type,
    alt,
    img = img_btn,
    className,
    imgClassName,
    size = [1, 1, 0, 0],
    category,
    isSolid = false
}) => {

    const storeBuild = build(state => state);
    const rotation = build(state => state.isBuild.objectSize.rotate);

    const handleClick = () => {
        if (storeBuild.isBuild.active && storeBuild.isBuild.type === type) {
            //build button not active
            storeBuild.buildState({
                'isActive': false, 
                'rotate': rotation,
                'isSolid': false
            });
        } else {
            //build button active and what type is set
            storeBuild.buildState({
                'isActive': true, 
                'type': type, 
                'category': category, 
                'objectSize': [size[0], size[1], size[2]],
                'rotate': rotation,
                'isSolid': isSolid
            });
        }
    }

  return (
      <button
          type='button'
          className={`${className || ''} ${storeBuild.isBuild.active && storeBuild.isBuild.type === type ? 'active' : ''}`}
          onClick={handleClick}
          data-tooltip={type}
          category={type}>
          {!img || <img
              src={img}
              className={imgClassName}
              category={type}
              alt={`Show ${alt} button`} />}
          {children}
      </button>
  )
}

export default BuildButton