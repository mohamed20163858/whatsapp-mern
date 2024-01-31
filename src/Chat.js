import React from "react";
import "./Chat.css";
import { Avatar, IconButton } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import MicNoneOutlinedIcon from "@mui/icons-material/MicNoneOutlined";
function Chat() {
  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar />

        <div className="chat_headerInfo">
          <h3>Room name</h3>
          <p>Last seen at...</p>
        </div>

        <div className="chat_headerRight">
          <IconButton>
            <SearchOutlinedIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="chat_body">
        <p className="chat_message">
          {" "}
          <span className="chat_name">Mohamed</span> this is a message{" "}
          <span className="chat_timestamp">{new Date().toUTCString()}</span>
        </p>
        <p className=" chat_message chat_reciever">
          {" "}
          <span className="chat_name">Mohamed</span> this is a message{" "}
          <span className="chat_timestamp">{new Date().toUTCString()}</span>
        </p>
        <p className="chat_message">
          {" "}
          <span className="chat_name">Mohamed</span> this is a message{" "}
          <span className="chat_timestamp">{new Date().toUTCString()}</span>
        </p>
      </div>

      <div className="chat_footer">
        <IconButton>
          <InsertEmoticonIcon className="footer_icon" />
        </IconButton>

        <form>
          <input type="text" placeholder="Type a message" />
          <button type="submit">Send a message</button>
        </form>
        <IconButton>
          <MicNoneOutlinedIcon className="footer_icon" />
        </IconButton>
      </div>
    </div>
  );
}

export default Chat;
