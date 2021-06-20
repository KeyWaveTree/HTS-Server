import express from 'express';
import { createServer, Server } from 'http';

const app = express();

const server = createServer(app);

server.listen(process.env.PORT || 5000); //서버를 실행하는 문
