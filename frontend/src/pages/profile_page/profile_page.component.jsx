import React from "react";
import "./profile_page.styles.css"
import ProfileTabs from '../../components/profile_tabs/profile_tabs.component'
import ProfileDescription from "../../components/profile_description/profile_description.component";

const ProfilePage = () => {
  return (
  <div className="profile-container">
    <h1>Profile</h1>
    
    <ProfileDescription />
    <ProfileTabs />
  </div>
  );
};

export default ProfilePage;
