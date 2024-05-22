import React from 'react';
import Image from 'next/image';
import checkbox_circle from '../assets/checkbox_circle.svg'; 
import arrow_right from '../assets/arrow_right.svg'; 
import '../styles/memberships.css';

const MembershipCard = ({membership}) => {
    return (
        <div className='card_container'>
            <div className='card_information'>
                <div className='card_title_pricing'>
                    <div className='membership_card_title'>
                        <h3>{membership.title}</h3>
                        <p>${membership.price}<span className='menu_font'>/Month</span></p>
                    </div>
                </div>
                <div className='card_description'>
                    <p className='membership_card_font'>{membership.description}</p>
                </div>
                <div className='card_points'>
                    <ul>
                        {
                            membership.features.map((feature,index)=>{
                                return(
                                    <li key={index}><Image src={checkbox_circle} alt='checkbox circle'/> <span className='memebership_point_font'>{feature}</span></li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className='card_button'>
                    <button className='joinnow_btn'>{membership.buttonLabel} <Image src={arrow_right} alt='right arrow' /></button>
                </div>
            </div>
        </div>
    )
}

export default MembershipCard