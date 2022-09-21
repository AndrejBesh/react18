import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchPosts } from "../slices/postsSlice"

export const Posts = () => {
    const dispatch = useDispatch()
    const { posts, status, error } = useSelector(state => state.posts)
    useEffect(() => {
        dispatch(fetchPosts())
    }, [])
    return (
        <div>
            <h2>Status:{status}</h2>
            <h2>Error:{error}</h2>
            <p>
                <pre> {JSON.stringify(posts, null, 2)}</pre>
            </p>
        </div>
    )
}