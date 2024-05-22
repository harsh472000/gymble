import React from 'react';
import Image from 'next/image';
import star from '../assets/star.svg';
import stopwatch from '../assets/Stopwatch.svg';
import '../styles/experiences.css';

const ExperienceCard = ({training}) => {
  return (
    <div className='card_image_info'>
        <div className='card_image'>
            <Image src={training.image} alt="racket image" width={395} height={253.12}/>
        </div>
        <div className='card_info'>
            <div className='card_title_rating'>
                <div className='card_title'>
                    <p className='card_title_font'>{training.title}</p>
                    <p className='card_city_font'>{training.location}</p>
                </div>
                <div className='card_rating'>
                    <Image src={star} alt='star icon' />
                    <span> {training.rating} ({training.reviews})</span>
                </div>
            </div>
            <div className='package_info'>
                <p>{training.price}</p>
                <Image src={stopwatch} alt='stopwatch' />
                <span className='package_hours'>{training.duration}</span>
            </div>
        </div>
    </div>
  )
}

export default ExperienceCard