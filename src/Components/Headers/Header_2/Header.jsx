import React,{useState} from 'react';
// import './Header.css'
import {FiAlignRight,FiXCircle,FiChevronDown } from "react-icons/fi";
import logo from '../../../assets/logi.png';
const Header_2 = () => {
    const [isMenu, setisMenu] = useState(false);
    const [isResponsiveclose, setResponsiveclose] = useState(false);
    const toggleClass = () => {
      setisMenu(isMenu === false ? true : false);
      setResponsiveclose(isResponsiveclose === false ? true : false);
  };
    let boxClass = ["main-menu menu-right menuq1"];
    if(isMenu) {
        boxClass.push('menuq2');
    }else{
        boxClass.push('');
    }
    const [isMenuSubMenu, setMenuSubMenu] = useState(false);
    const toggleSubmenu = () => {
      setMenuSubMenu(isMenuSubMenu === false ? true : false);
    };
    let boxClassSubMenu = ["sub__menus"];
    if(isMenuSubMenu) {
        boxClassSubMenu.push('sub__menus__Active');
    }else {
        boxClassSubMenu.push('');
    }
    return (
    <header className="header__middle">
        <div className="container">
            <div className="row">
                {/* Add Logo  */}
                <div className="header__middle__logo">
                    <a exact activeClassName='is-active'>
                        <img src={logo} alt="logo" /> 
                    </a>
                </div>
                <div className="header__middle__menus">
                    <nav className="main-nav " >
                    {/* Responsive Menu Button */}
                    {isResponsiveclose === true ? <> 
                        <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiXCircle />   </span>
                    </> : <> 
                        <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiAlignRight />   </span>
                    </>}
                    <ul className={boxClass.join(' ')}>
                        <li  className="menu-item" >
                            <a  activeClassName='is-active' onClick={toggleClass}> Home </a> 
                        </li>
                        <li className="menu-item " ><a onClick={toggleClass} activeClassName='is-active' to={`/About`}> About </a> </li>
                        <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <a to="#"> Shop <FiChevronDown /> </a>
                            <ul className={boxClassSubMenu.join(' ')} > 
                                <li> <a onClick={toggleClass} activeClassName='is-active'  to={`/Online`}> Online Shop </a> </li>
                                <li><a onClick={toggleClass} activeClassName='is-active' to={`/Offline`}> Offline Shop </a> </li>
                            </ul>
                        </li>
                        <li className="menu-item " ><a onClick={toggleClass} activeClassName='is-active' to={`/Contact`}> Contact </a> </li>
                    </ul>
                    </nav>     
                </div>   
            </div>
	    </div>
    </header>
    )
}
export default Header_2