import { useEffect } from "react";
import "./App.css";
import Chat from "./Chat";
import Sidebar from "./Sidebar";
import Pusher from "pusher-js";
import axiosInstance from './axios';

import { useState } from "react";

function App() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axiosInstance.get('/messages/sync');
      setMessages(await res.data);
    }
    fetchData(); 
  }, []);
  useEffect(() => {
    const  pusher = new Pusher('b0b14468ad9da69f01ae', {
      cluster: 'eu'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', function(data) {
      // alert(JSON.stringify(data));
      setMessages([...messages, data]);
    });
    return () => {
      channel.unbind('inserted');
      channel.unsubscribe('messages');
    }
  }, [messages]);
  console.log(messages);
  return (
    <div className="app">
      <div className="app_body">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
