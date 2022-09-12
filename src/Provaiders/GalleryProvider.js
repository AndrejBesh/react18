import { createContext } from "react"

export const GalleryContext = createContext(null)

export const GalleryProvider = ({ children }) => {

    const user = {
        name: "Stavre",
        lastname: "Stavridis"
    }

    // returns state that can be accessed by child components
    return (
        <GalleryContext.Provider value={user}>
            {children}
        </GalleryContext.Provider>
    )
}


// {/* <div>
//     // everything inside is a children and can be accessed through props.children
//     <p></p>
// </div> */}