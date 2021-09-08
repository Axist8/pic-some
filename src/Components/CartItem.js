import React, {useContext, useState} from 'react'
import {Context} from '../Context/Context'

function CartItem({item}) {
    const {removeFromCart} = useContext(Context)
    const [trashHovered, setTrashHovered] = useState(false)

    const trashClassName = trashHovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"

    return (
        <div className="cart-item">
            <i
                className={trashClassName}
                onClick={() => removeFromCart(item.id)}
                onMouseEnter={() => setTrashHovered(true)}
                onMouseLeave={() => setTrashHovered(false)}
            ></i>
            <img src={item.url} width="130px" alt='something' />
            <p>$5.99</p>
        </div>
    )
}

export default CartItem