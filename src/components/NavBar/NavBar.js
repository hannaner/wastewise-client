import { Link } from 'react-router-dom'
import * as userService from '../../utilities/users-service'

export default function NavBar({ user, setUser }){
    
    console.log(user)
    function handleLogout(){
        userService.logOut()
        setUser(null)
    }

    return (
        <nav>
            <span>Logged in as (user's email here)</span>
            <Link to="" onClick={handleLogout}>Logout</Link>
        </nav>
    )
}