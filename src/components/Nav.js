import { Link } from "react-router-dom"

export const Nav = () => {
    return (
        <nav>
            <ul >
                <li><Link to={'/posts'} />Posts</li>
                <li><Link to={'/comments'} />Comments</li>
                <li><Link to={'/gallery'} />Galery</li>

            </ul>
        </nav>
    )
}