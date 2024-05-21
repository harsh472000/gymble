import React from 'react';
import '../styles/experiences.css'
import ExperienceCard from './ExperienceCard';

const Experiences = () => {
  return (
    <section className='experiences'>
        <div className='experiences__title'>
            <h3>Experience</h3>
        </div>
        <div className='experiences_cards'>
            <div className='experiences_card'>
                <ExperienceCard />
                <ExperienceCard />
                <ExperienceCard />
            </div>
        </div>
    </section>
  )
}

export default Experiences