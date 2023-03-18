import { Link } from 'react-router-dom'
import * as userService from '../../utilities/users-service'
import './NavBar.css'
import logo from '../../img/logo.png'

export default function NavBar({ user, setUser }){
    
    function handleLogout(){
        userService.logOut()
        setUser(null)
    }

    return (
        <nav>
            <div className="navbar-logo">
                <img className="logo" src={logo} alt="Logo" />
            </div>
            <div className="navbar-menu">
                <ul></ul>
                <ul>
                    <li>
                        <span>Logged in as {localStorage.getItem('user')}</span>
                    </li>
                    <li>
                        &nbsp; | &nbsp; 
                    </li>
                    <li>
                        <Link to="" onClick={handleLogout}>Logout</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}