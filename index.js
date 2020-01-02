const http = require('http');


const server = http.createServer((req,res)=>{
    let url = req.url;
    if (url === '/') {
        url = '/index.html';
    }
   

    let contentType = 'text/plain';
    res.end(`${"Hello "} ${url.slice(1)} ${"!"}`);



});
server.listen(3005,()=>{
    console.log('server is listining');
});