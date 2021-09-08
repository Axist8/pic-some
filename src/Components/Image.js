import React, {useState, useContext} from 'react'
import {Context} from '../Context/Context'

function Image({className, img}) {
    const [hovered, setHovered] = useState(false)
    const {toggleFavorite, addToCart, removeFromCart, cartItems} = useContext(Context)

    const isInCart = cartItems.some(photo => photo.id === img.id)

    const heart = hovered && 
        <i className='ri-heart-line favorite' onClick={() => toggleFavorite(img.id)}></i>
    const favHeart = img.isFavorite &&
        <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)}></i>
    const cart = hovered &&
        <i className='ri-add-circle-line cart' onClick={() => addToCart(img)}></i>
    const inCart = isInCart &&
        <i className="ri-shopping-cart-fill cart" onClick={() => removeFromCart(img.id)}></i>

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
            {isInCart ? null : cart}
            {inCart}
        </div>
    )
}

export default Image