import Koa from 'koa'
import KoaStatic from 'koa-static'
import bodyParser from 'koa-bodyparser'
import { http2thrift } from './middleware/http2thrift'

const PORT = 3000

const app = new Koa();

app.use(bodyParser());
app.use(KoaStatic(__dirname + '/../public/static'));
app.use(http2thrift);

app.listen(PORT);

console.log('Fginx server listen port: ' + PORT)

