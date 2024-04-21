import React, { Component } from 'react';
import './Chatbot.css';
//import ChatBot from 'react-simple-chatbot';
// import { ThemeProvider } from 'styled-components';

class Chatbot extends Component {
    constructor() {
        super();
        this.state = {
            userMessage: '',
        };
    }

    componentDidMount () {
        // Your Chatbot JavaScript code goes here
    }

    render () {
        console.log("Chatbot rendering");
        return (
            
            <div>
                
                <p>this is a test</p>
            {/* <div className="chatbot"> */}
                
                <button className="chatbot-toggler">
                    <span className="material-symbols-outlined">more_horiz</span>
                    <span className="material-symbols-outlined">arrow_back</span>
                </button>
                <header>
                    <img
                        src="images/ChameleonLogo.png"
                        alt="Chatbot Image"
                        className="chatbot-image"
                    />
                    <h2>Chameleon</h2>
                    <button className="options-button material-symbols-outlined">
                        more_vert
                    </button>
                    <div className="options-container">
                        <ul>
                            <li>Website Project</li>
                            <li>MOP project</li>
                            <li>Evoleon Project</li>
                        </ul>
                    </div>
                    <span className="close-btn material-symbols-outlined">arrow_back</span>
                </header>
                <ul className="chatbox">
                    {/* Chat messages will be displayed here */}
                </ul>
                <div className="quick-options">
                    <button id="option1">Learn About our Projects</button>
                    <button id="option2">Support Us</button>
                    <button id="option3">I have another Question</button>
                </div>
                <div className="chat-input">
                    <textarea
                        placeholder="Enter your message here.."
                        spellCheck="false"
                        required
                    ></textarea>
                    <span id="send-btn" className="material-symbols-rounded">send</span>
                </div>
            </div>
            // </div>
        );
    }
}

/*
// This is the code for changing the bot's responses, integrate it with the rest of the code once the UI is fixed.
const steps = [
    {
        id: '0',
        message: 'This is Chameleon Chatbot!',
 
        // This calls the next id
        // i.e. id 1 in this case
        trigger: '1',
    }, {
        id: '1',
 
        // This message appears in
        // the bot chat bubble
        message: 'Please write your username',
        trigger: '2'
    }, {
        id: '2',
 
        // Here we want the user
        // to enter input
        user: true,
        trigger: '3',
    }, {
        id: '3',
        message: " hi {previousValue}, how can I help you?",
        trigger: 4
    }, {
        id: '4',
        options: [
             
            { value: 1, label: 'Resources Link' },
            { value: 2, label: 'Projects Link' },
 
        ],
        end: true
    }
];
 
// Set some properties of the bot
const config = {
    botAvatar: "img.png",
    floating: true,
};
 
function Chatbot() {
    return (
        <div className="App">
            <ChatBot
 
                // This appears as the header text for the chat bot
                headerTitle="Chameleon Bot"
                steps={steps}
                {...config}
 
            />
        </div>
    );
}
*/
export default Chatbot;
