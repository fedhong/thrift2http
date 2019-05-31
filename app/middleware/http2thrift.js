const ThriftClient = require('thrift-client');
const fs = require('fs');

const host = '127.0.0.1';
const port = 8080;

// TODO socket链接断开，服务挂掉

export const http2thrift = async (ctx, next) => {
    console.log('---------> http2thrift start');

    //TODO thrift的更新、稳定性
    const schema = fs.readFileSync(__dirname + '/../thrift-files/agent.thrift', 'utf-8');
    const client = new ThriftClient({ host, port, schema });

    const call = ctx.path.split('/')[1];

    let params = {};
    if (ctx.method === 'GET') {
        params = ctx.query;
    } else if (ctx.method === 'POST') {
        params = ctx.request.body;
    }

    try {
        const result = await (function () {
            return new Promise((resolve, reject) => {
                client.call(call, params).then(result => {
                    console.log('result', result);
                    resolve(result);
                }).catch(err => {
                    // TODO 根据异常返回404？500？
                    console.log('err', err);
                    reject(err);
                });
            })
        })();

        ctx.status = 200;
        ctx.body = result;

    } catch (error) {
        ctx.status = 404;
        ctx.body = error.message;

    }

    await next();

    console.log('---------> http2thrift end \n');
}
