### 模拟启动java服务
npm run java

### 启动node的代理服务
npm start

### 测试

###### GET
- http://localhost:3000/listAgent
- http://localhost:3000/getAgent?id=3

###### POST
- http://localhost:3000/addAgent
- application/json
- { "agent": {"name": "name", "isMultiCity": false, "description": "description" } }