import React from "react";
import "../Components/VideoFooter.css";
import { Button, Avatar } from "@material-ui/core";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ModeCommentIcon from "@material-ui/icons/ModeComment";
import SendIcon from "@material-ui/icons/Send";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import Ticker from "react-ticker";
const VideoFooter = ({ channel, song, likes, shares, avatarSrc }) => {
  return (
    <div className="video__Footer">
      <div className="videoFooter__Text">
        <Avatar src={avatarSrc} />
        <h3>
          {channel} . <button>Follow</button>
        </h3>
      </div>
      <div className="videoFooter__ticker">
        <MusicNoteIcon className="videoFooter__icon" />

        {/* <Ticker>
          {({ index }) => (
            <>
              <h1>This is the Headline of element #{index}!</h1>
            </>
          )}
        </Ticker> */}
      </div>

      <div className="videoFooter__actions">
        <div className="videoFooter__actionsLeft">
          <FavoriteIcon fontSize="large" />
          <ModeCommentIcon fontSize="large" />
          <SendIcon fontSize="large" />
          <MoreHorizIcon fontSize="large" />
        </div>
        <div className="videoFooter__actionsright">
            <div className="videoFooter__stat">
                <FavoriteIcon/>
                <p>{likes}</p>
            </div>
            <div className="videoFooter__stat">
                <ModeCommentIcon/>
                <p>{shares}</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default VideoFooter;
