class DirectChannel 
{
    constructor()
    {
        this.messages = []
        this.receiver = undefined
        // this.sender = undefined
        console.log("DirectChannel created")
    }

    setReceiver(receiver)
    {
        this.receiver = receiver
        console.log("DirectChannel receiver set")
    }

    async send(message) 
    {
        this.messages.push(message)
        console.log("DirectChannel message pushed")
        this.handleReceive() // can also be a polling mecano
    }

    async handleReceive()
    {
        if(this.messages.length > 0)
        {
            this.receive()
        }
    }

    async receive()
    {
        var message = this.messages.pop()
        this.receiver.handleTextMessage(message)
        console.log("DirectChannel message received")
    }
}