import "dotenv/config";
import express from "express";
import { router } from "./routes";


const app = express();
app.use(express.json());


app.use(router);

app.get("/github", (request, response) => {
    response.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`); //pedido de permição para a autenticação na aplicação
});

app.get("/signin/callback", (request, response) => {
    const { code } = request.query; // comando responsavel por pegar o codigo do usuario que o github passa.

    return response.json(code);
});

app.listen(4000, () => console.log('listening on port'));
