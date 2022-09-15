import { Link } from "react-router-dom"
import '../assets/css/Nav.css'
export const Nav = () => (

    <ul>
        <li><Link to='/weather'>Local Weather</Link></li>
        <li><Link to='search-cities'>Search Cities</Link></li>
    </ul>

)