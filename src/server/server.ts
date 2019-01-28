import * as express from 'express';
import { defaultRoutes } from './routes';
import * as path from 'path';
import * as cookieParser from 'cookie-parser';
import { defaultApiRoutes } from './routes/api';
function loggerMiddleware(request: express.Request, response: express.Response, next) {
  console.log(`${request.method} ${request.path}`);
  next();
}
 
const app = express();
 
app.use(loggerMiddleware);
app.use('/api', defaultApiRoutes);
app.use('/', defaultRoutes);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
/*
console.log(__dirname);
app.get('/', (req, res) => res.send('Hello World!'))
app.use(express.static(__dirname + '/public'))*/
app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
  });