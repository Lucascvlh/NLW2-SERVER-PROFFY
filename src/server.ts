import express from 'express';
import Routes from './routes';
import cors from 'cors';

const app = express();
app.use(cors())
app.use(express.json());
app.use(Routes);

// request.body = Dados para a criação ou atualização de um registro
// request.params = Identificar qual recurso eu quero atualizar ou deletar
// request.query= Paginação, filtros, ordenação

app.listen(3333);