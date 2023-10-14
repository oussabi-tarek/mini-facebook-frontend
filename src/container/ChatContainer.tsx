import {useState} from "react";
//import useSendMessage from "../hooks/chat/userSendMsg";
import MessageInput from "../components/chat/MessageInput";
import {Message} from "../types/Types";
import MessageList from "../components/chat/MessageList";
import ChatHeader from "../components/chat/ChatHeader";

export default function ChatAppContainer(){
    const [messages, setMessages] = useState<Message[]>([]);
    const [showBot, setShowBot] = useState(false);

    const handleSendMessage = (message: string) => {
        const messagesList = [...messages, {prompt: message, isUser: true}];
        setMessages(messagesList);
        setTimeout(() => {
            const botResponse = { prompt: 'This is a bot response.', isUser: false };
            setMessages([...messagesList, botResponse]);
          }, 1000);
    }
    const closeChatBot = ()=>{
        setShowBot(false);
    }
    return(
        <>
        {showBot && 
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-4">
                    <ChatHeader closeChatBot={closeChatBot}/>
                <div>
                    <MessageList messages={messages}/>
                    <MessageInput onSendMessage={handleSendMessage}/>
                </div>
            </div>
        </div>}
        </>
    )
}