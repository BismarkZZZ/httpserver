 const http = require('http'); 

 const handleAllRequests = (requestObject, responseObject) => {
     console.log('Hi, I just recieved a request');
     const url = requestObject.url;
     if(url === '/'){
         responseObject.write("<h1>Welcome Home</h1>")
     } else if (url === "/login") {
         responseObject.write("<h1>Login here</h1>")
     } else if (url === "/signup") {
        responseObject.write("<h1>Sign Up here</h1>")
    } else {
        responseObject.write("<h1>Page not found</h1>")
    }
     responseObject.end();
 }
 const server = http.createServer(handleAllRequests);

server.listen (3000, 'localhost', ()=>{console.log('server is ready to accept request')});