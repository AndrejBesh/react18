import { Link } from "react-router-dom"
const liStyle = {
    padding: '10px',
    listStyle: 'none'

}
const ulStyle = {
    display: 'flex',
    justifyContent: 'space-between'
}
export const Nav = () => {
    return (
        <nav>
            <ul style={ulStyle}>
                <li style={liStyle}>
                    <Link to={'/'}>Home</Link>
                </li>
                <li style={liStyle}>
                    <Link to={'/about'}>About</Link>
                </li>
                <li style={liStyle}>
                    <Link to={'/contact'}>Contact</Link>
                </li>
                <li style={liStyle}>
                    <Link to={'/users'}>Users</Link>
                </li>

            </ul>
        </nav>
    )
}