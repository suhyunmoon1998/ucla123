import React, { useState } from 'react'
import "./profile_page.styles.css"
import ProfileTabs from '../../components/profile_tabs/profile_tabs.component'
import ProfileDescription from "../../components/profile_description/profile_description.component";

const ProfilePage = () => {
  return (
  <div className="profile-container">
     <center>
        <div className="h1">
          <h1 className='profile-page-header'>Profile</h1>
        </div>
      </center>
    <ProfileDescription />
    <ProfileTabs />
  </div>
  );
};

export default ProfilePage;
