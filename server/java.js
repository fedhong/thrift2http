const thrift = require('thrift');
const AgentService = require('./gen-nodejs/AgentService');
const AgentTpye = require('./gen-nodejs/agent_types');

const agents = [];

for (let i = 1; i <= 10; i++) {
    agents.push(new AgentTpye.Agent({
        id: i,
        name: 'name' + i,
        isMultiCity: i % 2 === 0,
        description: 'description' + i,
    }));
}

const server = thrift.createServer(AgentService, {
    addAgent: function (agent, callback) {
        console.log(agent);
        const incrementId = agents.length + 1;
        console.log(incrementId);
        agent.id = incrementId;
        agents.push(agent);
        callback(null, agent);
    },
    deleteAgent: function (id, callback) {
        let count = agents.length;
        agents = agents.map(agent => {
            if (agent.id != id) {
                return agent;
            }
        });
        callback(null, agents.length - count);
    },
    updateAgent: function (newAgent, callback) {
        agents = agents.map(agent => {
            if (agent.id == newAgent.id) {
                return newAgent;
            } else {
                return agent;
            }
        });
        callback(null, newAgent);
    },
    getAgent: function (id, callback) {
        let rtnAgent;
        agents.map(agent => {
            if (agent.id == id) {
                rtnAgent = agent;
            }
        });
        callback(null, rtnAgent);
    },
    listAgent: function (callback) {
        callback(null, agents);
    }
})

server.listen(8080);
console.log("java server start on 8080");

server.on("error", function (e) {
    console.error(e);
})