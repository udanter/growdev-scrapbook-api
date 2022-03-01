import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get('/', (req: Request, res: Response) => {
    return res.send('Hello World!');
});

const port = process.env.PORT || 3333;

app.listen(3333, () => {
    console.log('API Rodando na Porta 8080');
});

