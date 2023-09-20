// Set your app credentials
const credentials = {
    apiKey: '60d236b178e3e539961ee8e9e0686c05f69961f341f0a001d753fe6482b92f21',
    username: 'chukauniapp',
}

// Initialize the SDK
const AfricasTalking = require('africastalking');

// Get the SMS service
const sms = AfricasTalking({...credentials}).SMS;

function sendMessage() {
    const options = {
        // Set the numbers you want to send to in international format
        to: ['+254769777397'],
        // Set your message
        message: "I sleep all night and I can't get enough of it",
        // Set your shortCode or senderId
        // from: 'Coyotito',
        enque: true
    }

    // That’s it, hit send and we’ll take care of the rest
    sms.send(options)
        .then(console.log)
        .catch(console.log);
}

sendMessage();