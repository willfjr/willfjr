import React, {useState, useEffect, useRef} from 'react';
import EmojiPicker from "emoji-picker-react"
import './ChatWindow.css'
import MessageItem from './MessageItem'
import API from '../API'


import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import SendIcon from '@material-ui/icons/Send';
import MicNoneIcon from '@material-ui/icons/MicNone';



export default ({user, data}) => {

// Confere o reconhecimento de voz do navegador

    const body = useRef();

    let recognition = null;
    let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        
        if (SpeechRecognition !== undefined){
            recognition = new SpeechRecognition();
        }

// Variáveis de Estado
    
    const [emojiOpenArea, setEmojiOpenArea] = useState (false);

    const [text, setText] = useState('');

    const [listening, setListening] = useState(false);

    const [list, setList] = useState([]);

    const [users, setUsers] = useState([]);

    useEffect ( () => {
        setList([]);
        let unSub = API.onChatContent(data.chatID, setList, setUsers);

        return unSub;

    }, [data.chatId]);

    useEffect (()=> {
        if(body.current.scrollHeight > body.current.offsetHeight) {
            body.current.scrollTop = body.current.scrollHeight - body.current.offsetHeight
        }
    }, [list]);
    
// Funções de manejo dos botões
    
    const handleEmojiClick = (e, emojiObject) => {
        setText( text + emojiObject.emoji);
    }

    const handleOpenEmojiArea = () => {
        setEmojiOpenArea (!emojiOpenArea)
    }

    const handleSendClick = () => {
        if (text !== ''){
            API.sendMessage(data, user.id, 'text', text, users);
            setText('');
            setEmojiOpenArea(false);
        }

    }

    const handleInputKeyUp = (e) => {
        if (e.keycode === 13) {
            handleSendClick()
        }
    }

    const handleMicClick = () => {
        if (recognition !== null){
            
            recognition.onstart = () => {
                setListening(true);
            }
            recognition.onend = () => {
                setListening(false);
            }
            recognition.onresult = (e) => {
                setText( e.results[0][0].transcript );
            }
            recognition.start();
        }
    }

    return(
        <div className="chatWindow">
            <div className="chatWindow--header">
                <div className="chatWindow--header-info">
                    <img className="chatWindow--avatar" src={data.image} alt=" "/>
                    <div className="chatWindow--name">{data.title}</div>
                </div>
                <div className="chatWindow--header-buttons">
                    <div className="chatWindow--btn">
                        <SearchIcon style={{color:'#919191'}}/>
                    </div>
                    <div className="chatWindow--btn">
                        <AttachFileIcon style={{color:'#919191'}}/>
                    </div>
                    <div className="chatWindow--btn">
                        <MoreVertIcon style={{color:'#919191'}}/>
                    </div>
                </div>

            </div>
            <div 
                className="chatWindow--body"
                ref={body}
            >
                {list.map((item, key) => (
                    <MessageItem
                        key={key}
                        data={item}
                        user={user}
                    />
                ))}
            </div>
            <div 
                className="chatWindow--emoji" 
                style={{height: emojiOpenArea?'200px' : '0px'}}
            >
                <EmojiPicker
                    disableSearchBar
                    disableSkinTonePicker
                    onEmojiClick = {handleEmojiClick}
                />    
            </div>
            <div className="chatWindow--footer">
                
                <div className="chatWindow--left">
                    <div 
                        className="chatWindow--btn"
                        onClick={handleOpenEmojiArea}
                    >
                        <InsertEmoticonIcon style={{color: emojiOpenArea?'#009688':'#919191'}}/>
                    </div>
                </div>
                <div className="chatWindow--input">
                    <input 
                        className='chat--input' 
                        type='text'
                        placeholder="Digite uma mensagem"
                        value={text}
                        onChange={e=>setText(e.target.value)}
                        onKeyUp ={handleInputKeyUp}
                    />
                </div>
                <div className="chatWindow--right">
                    { text !== "" &&
                        <div 
                            className="chatWindow--btn"
                            onClick ={handleSendClick}
                        >
                            <SendIcon style={{color:'#919191'}}/>
                        </div>
                    }
                    { text === "" &&
                        <div 
                            className="chatWindow--btn"
                            onClick ={handleMicClick}
                        >
                            <MicNoneIcon style={{color: listening?'#126ECE' : '#919191'}}/>
                        </div>
                    }                       
                </div>
            </div>
        </div>
    );
}