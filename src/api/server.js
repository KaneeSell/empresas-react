import jsonServer from "json-server";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  // caso tenha alguma porta aberta use ela no lugar da 5000
  // trocar http://seu-ip:${PORT} para ficar acessivel para fora da rede
  console.log(`JSON Server rodando em http://localhost:${PORT}`);
});//localhost fica acessivel na rede por outros dispositivos http://ip-local:5000
// Alterando a porta aqui, precisa mudar também no /src/hooks/ConexaoDB.ts
