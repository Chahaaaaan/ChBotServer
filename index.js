var http = require("http");

var fs = require('fs');

var server = http.createServer(function (req, res) {
    var path = "static/index.xml";
    if (fs.existsSync(path)) {
        fs.readFile(path, (err, data) => {
            if (!err) {
                res.writeHead(200, { "Content-Type": "text/xml" });
                res.end(data);
            }
        });
    }
});

var port = process.env.PORT || 3000;
server.listen(port, function () {
    console.log("This app is running at : http://localhost:" + port);
});