import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import footer_logo from '../assets/footer_logo.png';
import { IMP_LINKS, BUSSINESS_OWNER,FOOTER_SOCIAL_ICONS } from '../constants';
import '../styles/footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="footer_container">
                <div className='footer_left_right'>
                    <div className='footer_left'>
                        <div className='footer_logo'><Image src={footer_logo} alt="footer logo" /> <p>GYMBLE</p></div>
                        <div className='footer_address'>
                            <p>Address</p>
                            <p>Lorem ipsum Dolor Amet</p>
                        </div>
                    </div>
                    <div className='footer_right'>
                        <div className='important_links'>
                            <p className='title'>Important Links</p>
                            <ul>
                                {
                                    IMP_LINKS.map((link,index)=>{
                                        return (
                                            <Link href={link.href} key={index}>{link.label}</Link>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div className='important_links'>
                        <p className='title'>Bussiness Owner</p>
                            <ul>
                            {
                                    BUSSINESS_OWNER.map((link,index)=>{
                                        return (
                                            <Link href={link.href} key={index}>{link.label}</Link>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div className='important_links'>
                        <p className='title'>Contact Us</p>
                            <ul>
                                <div className='need_help'>
                                    <p>Need Help?</p>
                                    <p className='footer_link_font'>GYMBLE@gmail.com</p>
                                </div>
                                <div className='need_help'>
                                    <p>Need Support?</p>
                                    <p className='footer_link_font'>(01) 684 0124</p>
                                </div>
                                <div className='follow_us'>
                                    <p>Follow Us</p>
                                    <div className='footer_social_icons'>
                                        <ul>
                                            {
                                                FOOTER_SOCIAL_ICONS.map((icon,index)=>{
                                                    return(
                                                        <Link href={icon.href} key={index}><Image src={icon.icon} alt="instagram"/></Link>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='footer_copyright'>
                    <p>2024 © GYMBLE. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer