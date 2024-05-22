import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import footer_logo from '../assets/footer_logo.png';
import w_mail_line from '../assets/w_mail_line.svg';
import w_phone_line from '../assets/w_phone_line.svg';
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
                            <div className='footer_subtitle'>Lorem ipsum Dolor Amet</div>
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
                                    <p className='footer_link_font'><Image src={w_mail_line} alt="mail icon" />GYMBLE@gmail.com</p>
                                </div>
                                <div className='need_help'>
                                    <p>Need Support?</p>
                                    <p className='footer_link_font'><Image src={w_phone_line} alt="mail icon" />(01) 684 0124</p>
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