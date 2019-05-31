struct Agent{
     1: i16 id,
     2: string name,
     3: bool isMultiCity,
     4: string description
}

service AgentService{     
    Agent addAgent(1: Agent agent),
    i16 deleteAgent(1: i16 id),
    Agent updateAgent(1: Agent newAgent),
    Agent getAgent(1: i16 id),
    list<Agent> listAgent()
}
