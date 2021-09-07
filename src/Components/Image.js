import React, {useState} from 'react'

function Image({className, img}) {
    const [hovered, setHovered] = useState(false)

    const heart = hovered && <i className='ri-heart-line favorite'></i>
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
            {heart}
            {cart}
        </div>
    )
}

export default Image