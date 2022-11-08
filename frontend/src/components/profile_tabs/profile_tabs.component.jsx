import React, { useState } from "react";
import LikesTab from "../all_tabs/likes_tab.component";
import SellingTab from "../all_tabs/selling_tab.component";

import "./profile_tabs.styles.css"


const ProfileTabs = () => {
    const [activeTab, setActiveTab] = useState("likes_tab");
    
    const handleTab_Likes = () => {
        // update the state to likes_tab
        setActiveTab("likes_tab");
    };
    const handleTab_Selling = () => {
        // update the state to selling_tab
        setActiveTab("selling_tab");
    };

    return (
        <div className="Tabs">
        {/* Tab nav */}
        <ul className="nav">
            <li
                className={activeTab === "likes_tab" ? "active" : ""}
                onClick={handleTab_Likes}
            >
                Likes
            </li>
            <li
                className={activeTab === "selling_tab" ? "active" : ""}
                onClick={handleTab_Selling}
            >
                Items for Sale
            </li>
        </ul>

        <div className="outlet">
            {activeTab === "likes_tab" ? <LikesTab /> : <SellingTab />}
        </div>
        </div>
    );
};
export default ProfileTabs;