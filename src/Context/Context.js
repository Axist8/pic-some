import React, {useState, useEffect} from 'react'

const Context = React.createContext()

function ContextProvider({children}) {
    const [allPhotos, setAllPhotos] = useState([])

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json')
            .then(resp => resp.json())
            .then(data => setAllPhotos(data))
    }, [])

    return (
        <Context.Provider value={{allPhotos}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}