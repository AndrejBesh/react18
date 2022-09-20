import { memo } from "react"

export const Pure = memo(({ isAvailable }) => {
    console.log('PURE')

    return (
        <div>
            <p>isAvailable : {isAvailable ? 'yes' : 'no'}</p>
        </div>
    )
})