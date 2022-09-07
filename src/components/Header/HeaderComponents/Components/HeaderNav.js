import '../Styles/HeaderNav.css'
import HeaderLinks from './HeaderLinks';
import { Routes, Route } from "react-router-dom";
import CreateBlog from '../../../PostCreation/CreateBlog';


function HeaderNav() {
    return(
        <>
            <div className='header-nav'>
                <ul className='header-nav-list'>
                    <li className="header-nav-items"><HeaderLinks linkRef={"/Create-Post"} linkTitle={"Create Post"}/></li>
                </ul>
            </div>
        </>
    );
}

export default HeaderNav;