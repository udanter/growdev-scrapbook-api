import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get('/', (Request: Request, Response: Response) => {
    return Response.send('Hello World!');
});



const port = process.env.PORT || 8080;

app.listen(8080, () => {
    console.log('API Rodando na Porta 8080');
});