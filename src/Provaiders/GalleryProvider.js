import { createContext, useEffect, useState } from "react"
import { API_URL, PHOTOS_SIZE } from "../components/utils/constants"
export const GalleryContext = createContext(null)

export const GalleryProvider = ({ children }) => {
    const [photos, setPhotos] = useState([])
    const [selectedImage, setSelectedImage] = useState('')
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${API_URL}/photos?_limit=${PHOTOS_SIZE}`)
            const data = await response.json()
            setPhotos(data)
        }

        fetchData()
    }, [])

    const onDeleteImageHandler = (id) => {
        setPhotos(photos.filter(photo => id !== photo.id))
        setSelectedImage('')
    }
    const contextValue = {
        photos,
        onDeleteImageHandler,
        selectedImage,
        setSelectedImage
    }

    // returns state that can be accessed by child components
    return (
        <GalleryContext.Provider value={contextValue}>
            {children}
        </GalleryContext.Provider>
    )
}


// {/* <div>
//     // everything inside is a children and can be accessed through props.children
//     <p></p>
// </div> */}