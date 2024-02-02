import React from "react";
import "./Chat.css";
import { Avatar, IconButton } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import MicNoneOutlinedIcon from "@mui/icons-material/MicNoneOutlined";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { useState } from "react";
import axiosInstance from './axios';
 

function Chat({messages}) {
  const [message, setMessage] = useState('');
  const sendMessage = async (e) => {
    e.preventDefault();
    await axiosInstance.post('/messages/new', { message, name: "mohamed saleh", received: false});
    setMessage('');
  }
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
        { messages.length > 0  && messages.map((message, index) => (
          <p key={index} className={ `chat_message ${message.received && 'chat_reciever'}`}>
          {" "}
          <span className="chat_name">{message.name}</span>{message.message}
          <span className="chat_timestamp">{formatDistanceToNow(new Date(message.createdAt), { addSuffix: true})}</span>
        </p>
        ))}
        
      </div>

      <div className="chat_footer">
        <IconButton>
          <InsertEmoticonIcon className="footer_icon" />
        </IconButton>

        <form>
          <input type="text" placeholder="Type a message" value={message} onChange={(e) => setMessage(e.target.value)} />
          <button type="submit" onClick={sendMessage}>Send a message</button>
        </form>
        <IconButton>
          <MicNoneOutlinedIcon className="footer_icon" />
        </IconButton>
      </div>
    </div>
  );
}

export default Chat;
