/* imports http library and assigns to http variable */
const http = require("http");

/* grab command line args, 0=node,[ 1=path/to/file.js, rest arguments */
const port = process.argv[2];

/* request and response are similar to httpServletRequest and httpServletRespone in Java? */
function onRequest(request, response) {
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Hello World");
	response.end();
};

/* pass a function as a argument */
http.createServer(onRequest).listen(port);