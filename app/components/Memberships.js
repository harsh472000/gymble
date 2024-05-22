import React, { memo } from 'react';
import '../styles/memberships.css';
import MembershipCard from './MembershipCard';
import { MEMBERSHIP_PLANS } from '../constants';

const Memberships = () => {
  return (
    <section className='membership_container border'>
        <div className='membership_title'>
            <h3 className='border-bottom'>Membership</h3>
        </div>
        <div className='membership_cards'>
            {
                MEMBERSHIP_PLANS.map((membership,index)=>{
                    return (
                        <MembershipCard membership={membership} key={index} />
                    )
                })
            }
        </div>
    </section>
  )
}

export default Memberships