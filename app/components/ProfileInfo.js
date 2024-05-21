import React from 'react';
import '../styles/profileInfo.css';
import mail_line from '../assets/mail_line.svg';
import Image from 'next/image';
import { PROFILE_INFO } from '../constants/index.js';

const ProfileInfo = () => {
    return (
        <section className='profile_info'>
            <div className='left_side'>
                <div className='left_title_subtitle'>
                    <h3>About Us</h3>
                    <p className='profile_subtitle_font'>Gymble is a comprehensive business management platform that aims to streamline operations for businesses in the fitness industry. It offers a range of features, including a Business Dashboard, Admin Panel, and Business Portal, to assist businesses in managing client relationships, financial tracking, and other essential tasks </p>
                </div>
            </div>
            <div className='right_side'>
                <div className='rigtside_title'>
                    <h3>Reach Us</h3>
                </div>
                <div className="profile_links">
                    
                        {
                            PROFILE_INFO.map((info,index) => {
                                return (
                                    <div className='icon_label' key={index}>
                                        <Image src={info.icon} alt={info.alt} />
                                        <span>{info.label}</span>
                                    </div>
                                )
                            })
                        }
                   
                </div>
            </div>
        </section>
    )
}

export default ProfileInfo