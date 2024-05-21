import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import logo from '../assets/logo.png';
import mapPin from '../assets/map_pin.svg';
import { NAVLINKS } from '../constants';
import '../styles/navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar container'>
        <div className='navbar_left'>
            <Link href="/" className='navbar_image'>
                <Image src={logo} alt="Gymble logo" />
            </Link>
            <div className='navbar_searchbar'>
                <input type='text' placeholder='search'/>
            </div>
        </div>
        <div className='navbar_right'>
            <div className='navbar_location'>
                <div className='navbar_location_pin'>
                <Image src={mapPin} alt='location' />
                <p>LONG ISLAND</p>
                </div>
            </div>
            <div className='navbar_menu menu_font'>
                <ul>
                    {NAVLINKS.map((link)=>{
                        return(
                            <Link href={link.href} key={link.key}>{link.label}</Link>
                        )
                    })}
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar