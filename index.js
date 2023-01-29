const http = require('http');

const port = process.env.PORT || 3000;
const host = '0.0.0.0';

const requestListener = function (req, res) {
    if (req.url === '/homework') {
        res.writeHead(301, { Location: 'https://flannel-bacon-c10.notion.site/Dusty-Frontend-School-11280135e7d64d02ab109e51b0c18d7b' });
        res.end();

        return;
    }

    res.writeHead(200);

    res.write('pong');
    res.end();
};

const server = http.createServer(requestListener);


server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
