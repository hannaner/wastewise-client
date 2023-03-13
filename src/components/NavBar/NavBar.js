import { Link } from 'react-router-dom'
import * as userService from '../../utilities/users-service'

export default function NavBar({ user, setUser }){
    
    function handleLogout(){
        userService.logOut()
        setUser(null)
    }

    return (
        <nav>
            <span>Logged in as {localStorage.getItem('user')}</span>
            <Link to="" onClick={handleLogout}>Logout</Link>
        </nav>
    )
}