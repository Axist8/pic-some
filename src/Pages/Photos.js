import React, {useContext} from 'react'
import Image from '../Components/Image'
import {getClass} from '../utils'
import {Context} from '../Context/Context'

function Photos() {
    const {allPhotos} = useContext(Context)
    const photoGallery = allPhotos.map((photo, i) => (
        <Image key={photo.id} img={photo} className={getClass(i)} />
    ))
    return (
        <main className='photos'>
            {photoGallery}
        </main>
    )
}

export default Photos