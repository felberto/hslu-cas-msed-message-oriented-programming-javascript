class ChatBox extends HTMLDivElement 
{
    constructor() 
    {
        super();

        // Create a shadow root
        this.attachShadow({mode: 'open'});                
    }

    addMessage(messageText)
    {
        let textElement = document.createElement("p");
        textElement.innerText = messageText
        this.shadowRoot.append(textElement)
        console.log("ChatBox message added", messageText)
    }

    handleTextMessage(messageText)
    {
        console.log("ChatBox text message handled", messageText)
        this.addMessage(messageText)
    }

    handleMessage(messageObject)
    {
        if(messageObject.target === this.getAttribute("name"))
        {
            console.log("ChatBox text message handled", messageObject)
            this.addMessage(messageObject.message)
        }
        else 
        {
            console.log("ChatBox text message could NOT be handled", messageObject)
        }
    }
}

// Define the new element
customElements.define('chat-box', ChatBox, { extends: 'div' });