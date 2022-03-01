//import express, { Request, Response } from 'express';
//import cors from 'cors';

//const app = express();

//app.use(express.json());
//app.use(express.urlencoded({ extended: false }));
//app.use(cors());

//app.get('/', (req: Request, res: Response) => {
    //return res.send('Hello World!');
//});

//const port = process.env.PORT || 3333;

//app.listen(3333, () => {
    //console.log('API Rodando na Porta 8080');
//});

import express, { Request, Response } from 'express'

const app = express()
app.use(express.json())

app.get('/', (request: Request, response: Response) => {
    console.log('rota padrao')
    return response.json('API CRUD')
})

const frutas: any = ['maca', 'banana', 'pera']

// retorna todos

app.get('/frutas', (request: Request, response: Response) => {
    return response.status(200).json({
        msg: "Todas as frutas",
        frutas
    })
})

// retorna um

app.get('/frutas/:index', (request: Request, response: Response) => {
    const { index } = request.params

    return response.status(200).json(frutas[index])
})

// adicionar um

app.post('/frutas', (request: Request, response: Response) => {
    const { fruta } = request.body

    frutas.push(fruta)

    return response.status(201).json({
        message: 'Fruta adicionada',
        item: fruta,
        frutas
    })
})

// alterar um

app.put('/frutas/:fruta', (request: Request, response: Response) => {
    const { fruta } = request.params
    const { novaFruta } = request.body

    const find = frutas.indexOf(fruta)

    frutas[find] = novaFruta

    return response.status(200).json({
        msg: 'Alterado',
        frutas
    })
})

app.delete('/frutas/:fruta', (request: Request, response: Response) => {
    const { fruta } = request.params

    const findPosition = frutas.indexOf(fruta)

    frutas.splice(findPosition, 1)

    return response.status(200).json({
        msg: "Excluido com sucesso",
        item: fruta,
        frutas
    })

})

// deletar um

app.listen(3333, () => {
    console.log('servidor rodando')
})