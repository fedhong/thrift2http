const ThriftClient = require('thrift-client');
const fs = require('fs');

const host = '127.0.0.1';
const port = 8080;

const schema = fs.readFileSync(__dirname + '/agent.thrift', 'utf-8');

const client = new ThriftClient({ host, port, schema });

client.call("addAgent", { agent: {name: "name", isMultiCity: false, description: "description" } }).then(function () {
    console.log(arguments);
});

client.call("listAgent").then(result => {
    console.log(result);
}).catch(err => {
    console.log(err);
});