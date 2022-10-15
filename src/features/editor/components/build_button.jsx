import React from 'react'
import { interfaceButtons, build } from '@store/editor';
import img_btn from "@assets/images/icons/panel/rock_1.png";

const BuildButton = ({
    children,
    type,
    alt,
    img = img_btn,
    className,
    imgClassName,
    size = [1, 1]
}) => {

    const storeBuild = build(state => state);
    const interBtn = interfaceButtons(state => state);

    const handleClick = () => {
        if (interBtn.active && interBtn.button === type) {
            console.log('inactive', type);
            interBtn.btn(false, null)
            storeBuild.resetActiveBuild();
            storeBuild.changeRaySize(1, 1)
            storeBuild.changeActivateBuild(false);
        } else {
            console.log('active', type)
            interBtn.btn(true, type);
            storeBuild.activeBuild('category', type);
            storeBuild.changeRaySize(size[1], size[2], false)
            storeBuild.changeActivateBuild(true);
        }
    }

  return (
      <button
          type='button'
          className={`${className || ''} ${interBtn.active && interBtn.button === type ? 'active' : ''}`}
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