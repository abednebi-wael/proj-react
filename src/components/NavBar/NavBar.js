import React  from 'react'
import '../../App.css'
import {Link} from 'react-router-dom'
import Logo from '../../img/logo.png'
import {MdReorder , MdSearch  , MdOutlineFavorite} from 'react-icons/md'
import { FaShoppingCart} from 'react-icons/fa'

function NavBar() {
  // let menu = document.querySeloctor('#menu');
  // let navbar = document.querySeloctor('.navbar')

  // menu.onclick = () => {
  //   menubar.classList.toggle('fa-times');
  //   navbar.classList.toggle('active');

  
  return (
    <div>
      <header>
        <Link to={'/'}>
          <img src={Logo} alt='logo' />
          {/* <p>wael</p> */}
        </Link>
        <nav className='navbar'>
          <Link to={'/home'} className='active'>Home</Link>
          <Link to={'/about'}>About</Link>
          <Link to={'/menu'}>Menu</Link>
          <Link to={'/team'}>Team</Link>
          <Link to={'/reservation'}>Reservation</Link>
          <Link to={'/blog'}>Blog</Link>
        </nav>
        <div className='icons'>
           <i   className='fas fa-bars'> <MdReorder   className='icons-i'  />  </i>
           <i className='fas fa-search'> <MdSearch className='icons-i' /> </i>
           <i className='fas fa-heart' > <MdOutlineFavorite className='icons-i' /> </i>
           <i className='fas fa-shopping-card'> <FaShoppingCart className='icons-i'/> </i>

        </div>
      </header>


     
    </div>
  )
}

export default NavBar