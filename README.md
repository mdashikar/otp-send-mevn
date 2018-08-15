# Simple OTP Sms Sending Via Twilio

    This is a simple OTP sms sending app with vue,node,express,mongodb.

To use this app you need to modification just add your db url and your twilio accountSid and authToken. Fistly go to server folder then config folder you will find secret.js open it update your db.

In server/routes folder you will find a test.js open it and add your twilio accountSid and authToken. Then you are good to go.

# Build Setup
    #install dependencies
    npm install

    #serve in Dev mode both clientside and serverside just change start script

    -> "start": "concurrently \"npm run dev\" \"nodemon server/server.js\"",

    #serve vue and node 
    npm start

    #serve in Production mode just change start script
    -> "start": "node server/server.js",

    #serve with hot reload at localhost:8080 
    npm run dev

    #build for production with minification
    npm run build

    #build for production and view the bundle analyzer report
    npm run build --report
