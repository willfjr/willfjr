import React, {useState, useEffect} from 'react';
import './NewChat.css'
import API from '../API'

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

export default ({user, chatlist, show, setShow}) => {

    const [list, setList] = useState ([])

    useEffect (() => {
        const getList = async () => {
            if (user !== null) {
                let results = await API.getContactList(user.id)
                setList(results);
            }
        } 
        getList();
    }, [user])

    const handleClose = () => {
        setShow(false)
    }

    const addNewChat = async (user2) => {
        await API.addNewChat(user, user2);

        handleClose();
    }

    return (
        <div 
            className='newChat'
            style={{left: show? 0 : -415}}
        >
            <div className='newChat--header'>
                <div 
                    className='newChat--backButton'
                    onClick={handleClose}
                >
                <ArrowBackIcon style={{color:'#FFFFFF'}}/>
                </div>
                <div className='newChat--headerTitle'>Nova conversa</div>
            </div>
            <div className='newChat--list'>
                {list.map((item, key) => (
                    <div 
                        onClick={()=>addNewChat(item)}
                        className='newChat--item' 
                        key={key}>
                        <img className='newChat--item-avatar' src={item.avatar} alt=''/>
                        <div className='newChat--item-name'> {item.name} </div>
                    </div>
                ))}
            </div>
        </div>
    );
}