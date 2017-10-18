/* imports http library and assigns to http variable */
const http = require("http");

/* import readline to read from stdin */
const readline = require("readline");

/* constructor for readline module ?? */
const readlineIO = readline.createInterface({
	input : process.stdin,
	output : process.stdout
});

/* grab command line args, 0=node,[ 1=path/to/file.js, rest arguments */
const port = process.argv[2];

/* optional custom message */
var message;
if (process.argv[3] != null) {
	message = process.argv[3];
} else {
	message = "Hello World!";
}

/* request and response are similar to httpServletRequest and httpServletRespone in Java? */
function onRequest(request, response) {
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write(message);
	response.end();
};

/* long string! */
var welcome = "\nWelcome to the Simple Server.\n" +
		"The server is now listening on port " + port + "\n" +
		"\n" +
		"Please type -stop to stop to stop the server.";

/* terminal prompt */
function prompt(welcome) {
	/* readline standard input from terminal */
	readlineIO.question(welcome, (answer) => {
		if (answer == '-stop') {
			console.log("Good-bye!")
			process.exit();
		}
			
		/* close IO data streams */
		readlineIO.close();
	});
		
	
}

/* start the server */
function startServer(onRequest) {
	/* pass a function as a argument */
	http.createServer(onRequest).listen(port);
}

/* main loop area */
prompt(welcome);
startServer(onRequest);
