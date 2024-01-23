import React from 'react'
import H2 from '../../components/headings/H2'
import ProfileTable from '../../components/ProfileTable'
const Profile = () => {
  return (
    <div className='p-4'>
        <H2>Personal Details</H2>
        <ProfileTable/>
    </div>
  )
}

export default Profile