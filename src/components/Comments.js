import { API_URL, COMMENTS_SIZE } from "../components/utils/constants"
import { useEffect, useState } from "react"

export const Comments = () => {

    const [comments, setComments] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${API_URL}/comments?_limit=${COMMENTS_SIZE}`)
            const data = await response.json()
            await new Promise((r) => setTimeout(r, 5000))
            setComments(data)
        }

        fetchData()
    }, [])


    return (
        <div>
            {
                comments
                    ? comments.map(comment => <Comment key={comment.id} {...comment} />)
                    : <h3>Loading Comments</h3>
            }
        </div>
    )
}

const Comment = ({ id, name, body, email }) => (
    <div style={{
        border: "1px solid black",
        padding: "10px",
        margin: "10px",
        textAlign: "center"
    }}>
        <p> Id      : {id}   </p>
        <p> Name   : {name}</p>
        <p> Email   : {email}</p>
        <p> Body    : {body} </p>
    </div>
)