import React from 'react';
import '../styles/experiences.css'
import ExperienceCard from './ExperienceCard';
import { TRAINING_SESSIONS } from '../constants';

const Experiences = () => {
  return (
    <section className='experiences'>
        <div className='experiences__title'>
            <h3>Experience</h3>
        </div>
        <div className='experiences_cards'>
            <div className='experiences_card'>
                {
                    TRAINING_SESSIONS.map((training,index)=>{
                        return (
                            <ExperienceCard key={index} training={training} />
                        )
                    })
                }
               
            </div>
        </div>
    </section>
  )
}

export default Experiences