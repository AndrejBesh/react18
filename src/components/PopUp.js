import { useContext } from "react"
import { GalleryContext } from "../Provaiders/GalleryProvider"
export const PopUp = () => {
    const { photos, selectedImage } = useContext(GalleryContext)
    const selectedImageObject = photos.find(photo => photo.id === selectedImage)
    return (
        <div>
            <img src={selectedImageObject.url} alt={selectedImageObject.title}></img>
        </div>
    )
}