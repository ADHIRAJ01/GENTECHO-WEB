//PREVENTING DDOS ATTACKS
// sending 100 or 1000s of request on one server at a time   

// PREVENTING BRUTE FORCE ATTACKS  
// sending mails from number of different id and passwords on the website  

//SOLUTIONS 
/*
1.CAPTACHE / RECAPCHA 
    1. works on login forms 
    2. API access can't be blocked  

2. RATE LIMITER / INCREMENTAL DELAY / REQUEST THROLLING 
    1. works best 
    2. API access can also be rate-limited 

*/

/* ---------------------------------RATE LIMITING------------------------------- 
1. technique to control the traffic
2. limit no. of request from a client  
3. reduced list of attacks i.e. increased security  
4. server never overloaded 
5. Migitation brute-force/DOS/DDOS attack 
*/

// 1. INSTALL EXPRESS -RATE-LIMIT
// npm install express-rate-limit

const limiter = require('express-rate-limiter');

app.use(limiter({
    windowsMs : 5000 ,          // window time period - 5000ms = 5second
    max: 5 ,                     // max request to be send in 5sec = 5 
    message: {                  // it will display this msg if request overloaded   
        code: 429,
        message: "too many requests received"
    }
}));

//THIS FUNCTION MADE THAT IN EVERY 5 SEC ONLY MAX 5 REQUEST CAN BE SEND TO SERVER  

// HOW TO USE IT 

const limit = limiter({
    windowMs: 5000, 
    max: 3
});

app.use('/register ', limit , router);
//use it as middleware 

