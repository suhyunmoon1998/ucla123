import React from "react";
import useUserContext from "../../context/user.context";
import "./profile_description.styles.css"


const ProfileDescription = () => {
    let username = useUserContext().username;

    let fullName = username;
    let initials = fullName.charAt(0);
    if (username.includes(" ")) {
        fullName = username.split(' ');
        initials = fullName.shift().charAt(0) + fullName.pop().charAt(0);
    } 
    let initialsLogo = initials.toUpperCase()

    if (username==="Logged Out") {
        initialsLogo = "N/A"
    }


    return (
        <div className="profile-description">
            <div className="profile-picture-logo">
                <h1 className="profile-logo-letters">
                    {initialsLogo}
                </h1>
            </div>
            <h1 className="user-name">{username}</h1>
        </div>
    );
};
export default ProfileDescription;