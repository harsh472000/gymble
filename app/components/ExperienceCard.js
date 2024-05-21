import React from 'react';
import Image from 'next/image';
import racket from '../assets/racket.jpg';
import star from '../assets/star.svg';
import stopwatch from '../assets/Stopwatch.svg';
import '../styles/experiences.css';

const ExperienceCard = () => {
  return (
    <div className='card_image_info'>
        <div className='card_image'>
            <Image src={racket} alt="racket image" width={395} height={253.12}/>
        </div>
        <div className='card_info'>
            <div className='card_title_rating'>
                <div className='card_title'>
                    <p className='card_title_font'>Train Like a Pro</p>
                    <p className='card_city_font'>Long Island, NY</p>
                </div>
                <div className='card_rating'>
                    <Image src={star} alt='star icon' />
                    <span> 4.9 (120)</span>
                </div>
            </div>
            <div className='package_info'>
                <p>$100/person, $450/package</p>
                <Image src={stopwatch} alt='stopwatch' />
                <span className='package_hours'>5 hours</span>
            </div>
        </div>
    </div>
  )
}

export default ExperienceCard