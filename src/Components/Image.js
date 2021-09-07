import React, {useState, useContext} from 'react'
import {Context} from '../Context/Context'

function Image({className, img}) {
    const [hovered, setHovered] = useState(false)
    const {toggleFavorite} = useContext(Context)

    const heart = hovered && 
        <i className='ri-heart-line favorite' onClick={() => toggleFavorite(img.id)}></i>
    const favHeart = img.isFavorite &&
        <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)}></i>
    const cart = hovered && <i className='ri-add-circle-line cart'></i>

    return (
        <div 
            className={`${className} image-container`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <img
                className='image-grid'
                src={img.url}
                alt='blah'
            />
            {favHeart}
            {heart}
            {cart}
        </div>
    )
}

export default Image