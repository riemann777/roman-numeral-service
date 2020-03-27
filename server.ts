import * as restify from "restify";

const server: any = restify.createServer();

server.get('/hello/:name', respond);
server.head('/hello/:name', respond);

server.listen(8080, function() {
    console.log('%s listening at %s', server.name, server.url);
});


function respond(request: any, response: any, next: any) {
    response.send('hello ' + request.params.name);
    next();
}
