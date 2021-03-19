import React, {useState ,useEffect } from 'react'
import { Link } from 'react-router-dom';
import {FaTimes} from 'react-icons/fa';
import {FaBars} from 'react-icons/fa';
import { BiDrink} from 'react-icons/bi';
import './Navbar.css'
import logo from '../logo.svg';

const Navbar = () => {
  const [click , setClick ] =  useState(false);
  const [button, setButton] = useState(true);


  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
      if(window.innerWidth <= 960 ){
          setButton(false)
      }else{
          setButton(true)
      }
  }

  useEffect(() =>{
      showButton();
  }, []);

  window.addEventListener('resize' , showButton);

  return (
    <>
    <div className="navbar">
        <div className="navbar-container container">
          <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
              <BiDrink className="navbar-icon " />
               TheCocktail
          </Link>
          <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes/> : <FaBars/>}
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item ">
                <Link to="/" className="nav-links"  onClick={closeMobileMenu}>
                    Home
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/about" className="nav-links"  onClick={closeMobileMenu}>
                    About
                </Link>
            </li>  
          </ul>
        </div>
    </div>   
</>
  )
}

export default Navbar
