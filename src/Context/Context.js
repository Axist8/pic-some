import React, {useState, useEffect} from 'react'

const Context = React.createContext()

function ContextProvider({children}) {
    const [allPhotos, setAllPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])

    function toggleFavorite(id) {
        const newPhotoArray = allPhotos.map(photo => {
            if (photo.id === id) {
                return {
                    ...photo,
                    isFavorite: !photo.isFavorite
                }
            }
            return photo
        })
        setAllPhotos(newPhotoArray)
    }

    function addToCart(img) {
        const updatedCart = [...cartItems, img]
        setCartItems(updatedCart)
    }

    function removeFromCart(id) {
        const updatedCart = cartItems.filter(item => item.id !== id)
        setCartItems(updatedCart)
    }

    function emptyCart() {
        setCartItems([])
    }

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json')
            .then(resp => resp.json())
            .then(data => setAllPhotos(data))
    }, [])

    return (
        <Context.Provider value={{
            allPhotos,
            cartItems,
            toggleFavorite,
            addToCart,
            removeFromCart,
            emptyCart}}
        >
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}