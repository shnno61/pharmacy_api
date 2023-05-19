import express  from 'express';
import { Router } from 'express';
import config from './config';
const port=config.port as unknown as number;

const app: express.Application=express();

app.use('/pharmacy', Router);

app.listen(port , function () {console.log(`the server is running at port${port}`)});

 export default app ;
