import React, {useContext, useState} from 'react'
import {Context} from '../Context/Context'
import CartItem from '../Components/CartItem'

function Cart() {
    const {cartItems, emptyCart} = useContext(Context)
    const [buttonText, setbuttonText] = useState('Place Order')


    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item} />
    ))

    const totalPrice = (cartItemElements.length * 5.99)
        .toLocaleString("en-US", {style: "currency", currency: "USD"})

    function placeOrder() {
        setbuttonText('Ordering...')
        setTimeout(() => {
            console.log('order placed!')
            setbuttonText('Place Order')
            emptyCart()
        }, 3000)
    }

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: {totalPrice}</p>
            <div className="order-button">
                {cartItems.length ? <button onClick={placeOrder}>{buttonText}</button> : <p>There are no items in your cart.</p>}
            </div>
        </main>
    )
}

export default Cart