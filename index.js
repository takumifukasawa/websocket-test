var app = require("express")();
var http = require("http").Server(app);
var io = require("socket.io")(http);

// when starting web server, send html to web browser.
app.get("/", function(req, res) {
    //res.send("<h1>Hello world.</h1>");
    res.sendFile(__dirname + "/index.html");
});

// web socket connection
io.on("connection", function(socket) {
    console.log("a user connected.");

    socket.on("disconnect", function() {
        console.log("user disconnected.");
    });
    
    socket.on("chat message", function(msg) {
        io.emit("chage message", msg);
    });
});

// starting web server.
http.listen(3000, function() {
    console.log("listening, on *: 3000");
});
