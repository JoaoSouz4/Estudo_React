import { HeaderMenu, UlMenu} from "./styles";
import { Link } from 'react-router-dom';
function Header(){
    return (
     <HeaderMenu>
        <a href="/">Context + Sc</a>
        <UlMenu>
            <li>
                <Link to = {"/home"}>Home</Link>
            </li>
            <li>
                <Link to = {"/posts"}>Posts</Link>
            </li>
        </UlMenu>
     </HeaderMenu>
    )
}

export default Header