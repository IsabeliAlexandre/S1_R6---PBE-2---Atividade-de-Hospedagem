import 'dotenv/config';
import express from "express";
import routes from "./routes/routes.js";
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/uploads', express.static('uploads'));
app.use('/', routes);

app.listen(process.env.DB_SERVER, () => {
    console.log(`Servidor rodando em http://${process.env.DB_HOST}:/${process.env.DB_SERVER}`);
});