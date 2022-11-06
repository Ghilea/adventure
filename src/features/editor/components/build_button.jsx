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
    rotate,
    isSolid = false
}) => {

    const storeBuild = build(state => state);

    const handleClick = () => {
        console.log('checkSolid', isSolid)
        if (storeBuild.isBuild.active && storeBuild.isBuild.type === type) {
            console.log('inactive')
            //build button not active
            storeBuild.buildState(false, false, '', '', {x: 1, z: 1, y: 0, rotate: 0}, false);
        } else {
            console.log('active')
            //build button active and what type is set
            storeBuild.buildState(true, type, category, [size[0], size[1], size[2], rotate], isSolid);
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