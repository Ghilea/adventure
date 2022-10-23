import React, { useEffect } from 'react'

const disable = () => {
  
    const mouseRight = (event) => {
        if (event.type === 'contextmenu') {
            //event.preventDefault();
        }
    }

    return [mouseRight]
}

export default disable