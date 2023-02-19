import React, { useState } from 'react';
import SideBar from '../SideBar/SideBar';
import { faHome, faList, faCog, faPlus} from '@fortawesome/free-solid-svg-icons';
import { Link , useLocation} from 'react-router-dom';


export const Navbar = () => {
    const [showSidebar, setShowSideBar] = useState(false);
    const location = useLocation();
    const links = [
        {
            name: 'Домашня',
            path: '/',
            icon: faHome
        },
        {
            name: 'Мої рецепти',
            path: '/recipies',
            icon: faList
        },
        {
            name: 'Додати новий',
            path: '/addpage',
            icon: faPlus
        },
        {
            name: "Налаштування",
            path: '/settings',
            icon: faCog
        },
    ];
    const closeSideBar = () => {
        setShowSideBar(!showSidebar)
    }
    return (
        <>
            <div className='navbar container'>
                <Link to='/' className='logo'>
                    Recipe B<span>oo</span>k
                    </Link>
                    <div className="navbar__links">
                    {links.map(link => (
                        <Link to={link.path} className={location.pathname === link.path ? 'navbar__item active' : 'navbar__item' } key={link.name}>{link.name}</Link>
                        ))}
                    </div>   
                    
                    <div onClick={()=> setShowSideBar(!showSidebar) } className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
            </div>

            {showSidebar && <SideBar close={closeSideBar} links={ links } /> }
        </>
    )
};
