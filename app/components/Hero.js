import React from 'react'
import Image from 'next/image';
import '../styles/hero.css';
import hero from '../assets/hero.jpg';
import logo from '../assets/logo.png';
import twitter from '../assets/twitter.svg';
import instagram from '../assets/instagram.svg';

const Hero = () => {
    return (
        // <section className='hero'>
        //     <div className='hero_img'>
        //         <Image src={hero} height={320} width={1255} alt='hero image' />
        //     </div>
        //     <div className='hero_info'>
        //         <div className='hero_image'>
        //             <Image src={logo} alt='logo image' height={110} width={78} />
        //         </div>
        //         <div className='hero_title_socials'>

        //             <div className='hero_title_subtitle'>
        //                 <div className='hero_title'></div>
        //                 <div className='hero_subtitle'></div>
        //             </div>
        //             <div className='hero_socials'></div>
        //         </div>

        //     </div>
        // </section >
        <>
            <div className="header-container">
                <div className="header-background">
                    <Image src={hero} alt="Gym Background" className="background-image" height={320} width={1260} />
                </div>
            </div>
            <div className="header-content">
                <div className="logo-section">
                    <div className='logo_image'>
                        <Image src={logo} alt="Gymble Logo" height={110} width={78} />
                    </div>

                </div>
                <div className='title_socials'>
                    <div className='title_subtitle'>
                        <h1>GYMBLE</h1>
                        <p className='hero_subtitle_font'>Manage, Connect, and Grow</p>
                    </div>
                    <div className='socials'>
                        <div className='social_info'>
                            <Image src={twitter} alt='linkedin' />
                            <span className='social_icon_font'>@GYMBLE.id</span>
                        </div>
                        <div className='social_info'>
                            <Image src={instagram} alt='linkedin' />
                            <span className='social_icon_font'>@GYMBLE.id</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero