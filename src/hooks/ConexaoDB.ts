import axios from "axios";

const porta = 5000;
const urlBase = `http://localhost:${porta}/empresas`;
// IP e Porta devem estar como na API para dar certo.

export async function Remover(empresaId:number) {
    await axios.delete(`${urlBase}/${empresaId}`);
}

export async function Salvar(nome:string, nomeFantasia:string, email:string, cep:string, cnpj:string, pais:string, estado:string, bairro:string, rua:string, numero:string, complemento:string, contato:string, cidade:string,id?: number) {
    const empresa = { nome, nomeFantasia, email, cep, cnpj, pais, estado, bairro, rua, numero, complemento, contato, cidade };
    if(id){
        await axios.put(`${urlBase}/${id}`, empresa)
    } else {
        await axios.post(urlBase, empresa);
    }
}

export async function BuscarCliente(id:number){
    const lista = await ListaDB()
    return lista.find((e:any) => Number(e.id) === Number(id))
}

export async function ListaDB() {
    return await axios.get(urlBase).then(resp => resp.data);
}
