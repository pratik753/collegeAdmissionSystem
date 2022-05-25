import React, { useEffect } from 'react'
import img from './img.png'
import "./ChatBot.css"

export default function ChatBot() {

    useEffect(()=>{
        window.addEventListener('dfMessengerLoaded', function (event) {
            let $r1 = document.querySelector("df-messenger");
            let $r2 = $r1.shadowRoot.querySelector("df-messenger-chat");
            let $r3 = $r2.shadowRoot.querySelector("df-messenger-user-input"); //for other mods
            var sheet = new CSSStyleSheet;
            // manage box height from here
            sheet.replaceSync( `div.chat-wrapper[opened="true"] { height: 450px }`);
            $r2.shadowRoot.adoptedStyleSheets = [ sheet ];
            });
    },[])
    return (
        <div id="chat-div">
         //
         
        <df-messenger
     
        intent="WELCOME"
        chat-title='Trident Bot'
        agent-id="30e7f750-1a5a-4d53-a61b-8dcfc99bc444"
        language-code="en"
        chat-icon="https://image.flaticon.com/icons/png/512/1698/1698535.png"
        // chat-icon={img}
        ></df-messenger>
        </div>
    )
}
