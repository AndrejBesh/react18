import { useContext } from "react"
import { GalleryContext } from "../Provaiders/GalleryProvider"
import { PopUp } from "./PopUp"
export const Gallery = () => {

    const { photos, onDeleteImageHandler, selectedImage, setSelectedImage } = useContext(GalleryContext)
    // {
    //     "albumId": 1,
    //     "id": 1,
    //     "title": "accusamus beatae ad facilis cum similique qui sunt",
    //     "url": "https://via.placeholder.com/600/92c952",
    //     "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    //   },

    return (
        <div >
            {/* <pre>{JSON.stringify(providerValue, null, 2)}</pre> */}
            {photos.map(photo => (
                <div
                    onClick={() => onDeleteImageHandler(photo.id)}
                    onContextMenu={(e) => {
                        e.preventDefault()
                        setSelectedImage(photo.id)
                    }

                    }
                    key={photo.id} style={{ display: 'inline-block' }}>
                    <img src={photo.thumbnailUrl} alt={photo.title}></img>
                </div>
            )
            )}
            {selectedImage && <PopUp />}
        </div >
    )
}