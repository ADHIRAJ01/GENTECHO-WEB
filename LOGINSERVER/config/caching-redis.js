//WE SHOULD APPLY CACHING CACHING TO MAKE WEBSITE 1000 times faster 
// WE SHOULD DO CACHING WHERE DATA IS NOT CHANGING FREQUENTLY  

// 1. INSTALL REDIS ON YOUR LOCAL MACHINE  
// 2. INSTALL HOME BREW 
// brew install redis 

// VIEWING RESPONSE TIME OF WEBSITE 
// INSTALL REPSONSE-TIME
// npm i reponse-time

// THIS GIVES RESPONSE TIMES OF A WEBSITE IN HEADER  
const response = require('response-time');
app.use(response());  

/*
................................................................
................................................................ wrote some function to fetch data which is not changing regularly through axios
*/


// LET'S SAY RESPONSE TIME IS 1100 or 1.1second 
// NOW WE NEED TO USE CACHING TO REDUCE RESPONSE TIME 


/*
................................................................
................................................................
left to learn 
................................................................
................................................................
*/