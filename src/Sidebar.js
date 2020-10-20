
import React from 'react';
import "./Sidebar.css"
import SidebarRow from "./SidebarRow";
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import ExpandMoreOutlinedIcon from '@material-ui/icons/Subscriptions';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbDownAltOutlined';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import HistoryIcon from '@material-ui/icons/History';


function Sidebar() {
    return (
        <div className = "Siderbar">
            <SidebarRow  selected Icon = {HomeIcon} title = "Home"/>
            <SidebarRow  Icon = {WhatshotIcon}  title = "Trending"/>
            <SidebarRow Icon = {SubscriptionsIcon}  title = "Subscription"/>
            <hr />
            <SidebarRow  Icon = {VideoLibraryIcon} title = "Library"/>
            <SidebarRow Icon = {HistoryIcon} title = "History"/>
            <SidebarRow Icon = {OndemandVideoIcon} title = "Your Videos"/>
            <SidebarRow  Icon = {WatchLaterIcon} title = "Watch Latter"/>
            <SidebarRow Icon = {ThumbUpAltOutlinedIcon} title = "Liked Video"/>
            <SidebarRow Icon = {ExpandMoreOutlinedIcon} title = "Show more"/>
            <hr />
        </div>
    )
}

export default Sidebar;
 