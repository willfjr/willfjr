import React, {useState, useEffect} from 'react';
import './App.css';

import ChatListItem from './components/ChatListItem';
import ChatIntro from './components/ChatIntro';
import ChatWindow from './components/ChatWindow';
import NewChat from './components/NewChat';
import Login from './components/Login';
import API from './API';

import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';


export default () => {

  const [chatlist, setChatList] = useState([]);

  const [activeChat, setActiveChat] = useState({});

  const [user, setUser] = useState({
    id:'2zKTxjGKZvWhnhcakgNaortKImd2',
    name: 'Wilson Ferreira',
    avatar: 'https://graph.facebook.com/5903885469625192/picture'
  });

  const [showNewChat, setShowNewChat] = useState(false);

  useEffect( () => {
    if(user !== null){
      let unSub = API.onChatList(user.id, setChatList);
      return unSub; 
    }

  }, [user]);

  const handleNewChat = () => {
    setShowNewChat (true);
  }

  const handleLoginData = async (u) => {
    let newUser = {
      id: u.id,
      name: u.displayName,
      avatar: u.photoURL
    };

    await API.addUser(newUser)
    setUser(newUser);
  }

  if (user === null){
    return (
    <Login onReceive={handleLoginData}/>
    );
  }

  return (
    <div className="app-window">
      
      <div className="sidebar">
        <NewChat
          chatlist= {chatlist}
          user= {user}
          show={showNewChat}
          setShow={setShowNewChat}
        />
        <header>
          <img className='avatar--header' src={user.avatar} alt=''/>
          <div className='buttons--header'>
            <div className='btn--header'>
              <DonutLargeIcon style={{color:'919191'}}/>
            </div>
            <div 
              className='btn--header'
              onClick={handleNewChat}
            >
              <ChatIcon style={{color:'919191'}}/>
            </div>
            <div className='btn--header'>
              <MoreVertIcon style={{color:'919191'}}/>
            </div>
          </div>
        </header>

        <div className="search">
          <div className="search--input">
            <SearchIcon style={{color:'919191'}} fontSize="small"/>
            <input type="search" placeholder="Procurar ou começar um nova conversa" />
          </div>
        </div>

        <div className="chat-list">
          {chatlist.map((item, key) => (
            <ChatListItem
              key={key}
              data={item}
              active={activeChat.chatId === chatlist[key].chatId}
              onClick={() => setActiveChat(chatlist[key])} 
            />
          ))}
        </div>

      </div>

      <div className="content-area">
            {activeChat.chatId !== undefined &&
              <ChatWindow
              user={user}
              data={activeChat}
              />
            }
            
            {activeChat.chatId === undefined &&
              <ChatIntro/>
            }

      </div>

    </div>
  );
}
