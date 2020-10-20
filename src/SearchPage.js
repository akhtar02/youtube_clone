import React from 'react';
import './SearchPage.css';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';

function SearchPage() {
    return (
        <div className = "searchPage">
            <div className = "searchPage_filter">
            <TuneOutlinedIcon />
        <h2>Filter</h2>
            </div>
            <hr />

            <ChannelRow
        image="https://www.google.com/search?q=clever+programmer+youtube+channel+dp&sxsrf=ALeKk00ILH8ZBfRPk84d-RCCJwqAZi7bVQ:1603232637546&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjnnen-msTsAhWpz4UKHW43Bj8Q_AUoAnoECA0QBA&biw=903&bih=974#imgrc=OT9A6evNOKarvM"
        channel="Clever Programmer"
        verified
        subs="659K"
        noOfVideos={382}
        description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding sskills to the ..."
      />

      <hr />
      <VideoRow
        views="1.4M"
        subs="659K"
        description="Do you want a FREE one"
        timestamp="59 seconds ago"
        channel="Clever Programmer"
        title="Let's Build a YouTube Clone"
        image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.Jbm7P8PO0ABnbo4P0G8hdwHaE2%26pid%3DApi&f=1"
      />
      <VideoRow
        views="1.4M"
        subs="659K"
        description="Do you want a FREE one"
        timestamp="59 seconds ago"
        channel="Clever Programmer"
        title="Let's Build a YouTube Clone"
        image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.Jbm7P8PO0ABnbo4P0G8hdwHaE2%26pid%3DApi&f=1"
      />
      <VideoRow
        views="1.4M"
        subs="659K"
        description="Do you want a FREE one"
        timestamp="59 seconds ago"
        channel="Clever Programmer"
        title="Let's Build a YouTube Clone"
        image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.Jbm7P8PO0ABnbo4P0G8hdwHaE2%26pid%3DApi&f=1"
      />
      <VideoRow
        views="1.4M"
        subs="659K"
        description="Do you want a FREE one"
        timestamp="59 seconds ago"
        channel="Clever Programmer"
        title="Let's Build a YouTube Clone"
        image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.Jbm7P8PO0ABnbo4P0G8hdwHaE2%26pid%3DApi&f=1"
      />
      <VideoRow
        views="1.4M"
        subs="659K"
        description="Do you want a FREE one"
        timestamp="59 seconds ago"
        channel="Clever Programmer"
        title="Let's Build a YouTube Clone"
        image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.Jbm7P8PO0ABnbo4P0G8hdwHaE2%26pid%3DApi&f=1"
      />
    </div>
             
    )
}

export default SearchPage;
