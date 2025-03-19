import { FormEvent, useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { BuscarCliente, Salvar } from "../hooks/ConexaoDB"
import { formatarCNPJ, validarCNPJ } from '../hooks/ValidarCNPJ'

interface FormCadastro{
    funcao: 'edit' | 'novo'
    id?: string | undefined
}
export default function FormCadastro(props: FormCadastro) {
    const [id, setId] = useState(0)
    const [nome, setNome] = useState('')
    const [nomeFantasia, setNomeFantasia] = useState('')
    const [email, setEmail] = useState('')
    const [cep, setCep] = useState('')
    const [cnpj, setCNPJ] = useState('')
    const [pais, setPais] = useState('')
    const [estado, setEstado] = useState('')
    const [bairro, setBairro] = useState('')
    const [rua, setRua] = useState('')
    const [numero, setNumero] = useState('')
    const [complemento, setComplemento] = useState('')
    const [contato, setContato] = useState('')
    const [cidade, setCidade] = useState('')
    const [mensagem, setMensagem] = useState('')
    const navegar = useNavigate()
    
    async function carregarCadastro(id:number){
        const empresa = await BuscarCliente(id)
        setId(empresa.id)
        setNome(empresa.nome)
        setNomeFantasia(empresa.nomeFantasia)
        setEmail(empresa.email)
        setCep(empresa.cep)
        setCNPJ(empresa.cnpj)
        setPais(empresa.pais)
        setEstado(empresa.estado)
        setBairro(empresa.bairro)
        setRua(empresa.rua)
        setNumero(empresa.numero)
        setComplemento(empresa.complemento)
        setContato(empresa.contato)
        setCidade(empresa.cidade)
    }

    function submitForm(e:FormEvent){
        e.preventDefault()
        if (validarCNPJ(cnpj)){
            salvarRetornar()
        } else{
            setMensagem('CNPJ Inválido!')
        }
    }

    function salvarRetornar(){
        Salvar(nome, nomeFantasia, email, cep, cnpj, pais, estado, bairro, rua, numero, complemento, contato, cidade, id);
        navegar('/cadastros');
    }

    useEffect(() => {
        if(props.id) {
            carregarCadastro(Number(props.id))
        }
    },[])

    return (
        <form onSubmit={(event) => submitForm(event)}
        className="container rounded-3 bg-bege mt-2 pt-3">
            <button className="btn btn-tema1 rounded-1 text-light btnSalvarCadastro"
            type="submit"
            >Salvar</button>
            {mensagem && <div className="alert alert-danger">{mensagem}</div>}
            <div className="">
                <nav className="nav">
                    <a className="nav-link active fw-bold cor1 linkCadastro" aria-current="page" href="#">Dados Gerais</a>
                    <a className="nav-link disabled" aria-disabled="true">Filiais</a>
                </nav>
            </div>
            <div className="container text-start mt-4 pb-4 ">
                <div className="row">
                    <div className="col">
                        <div className="mb-3">
                            <label htmlFor="cnpj"
                            className="form-label cor1"
                            >CNPJ</label>
                            <input type="text" 
                            className="form-control"
                            minLength={18}
                            maxLength={18}
                            id="cnpj"
                            value={cnpj}
                            onChange={(e) => setCNPJ(formatarCNPJ(e.target.value))}
                            required
                            />
                        </div>
                    </div>
                    <div className="col">
                        <div className="mb-3">
                            <label htmlFor="nome"
                            className="form-label cor1"
                            >Nome</label>
                            <input type="text" className="form-control"
                            id="nome"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            minLength={4}
                            maxLength={60}
                            required
                            />
                        </div>
                    </div>
                    <div className="col">
                        <div className="mb-3">
                            <label htmlFor="nomeFantasia"
                            className="form-label cor1"
                            >Nome Fantasia</label>
                            <input type="text" className="form-control"
                            id="nomeFantasia"
                            value={nomeFantasia}
                            onChange={(e) => setNomeFantasia(e.target.value)}
                            minLength={2}
                            maxLength={60}
                            required
                            />
                        </div>
                    </div>
                </div>
                    <div className="row">
                        <div className="col-md-auto">
                            <label htmlFor="contato"
                            className="form-label cor1"
                            >Contato</label>
                            <input type="text" 
                            className="form-control"
                            minLength={10}
                            maxLength={12}
                            id="contato"
                            value={contato}
                            onChange={(e) => setContato(e.target.value)}
                            required
                            />
                        </div>
                        <div className="col">
                            <label htmlFor="email"
                            className="form-label cor1"
                            >E-Mail</label>
                            <input type="email" className="form-control"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            minLength={6}
                            maxLength={60}
                            required
                            />
                        </div>
                        <div className="col col-lg-2">
                            <label htmlFor="cep"
                            className="form-label cor1"
                            >Cep</label>
                            <input type="text" 
                            className="form-control"
                            minLength={8}
                            maxLength={9}
                            id="cep"
                            value={cep}
                            onChange={(e) => setCep(e.target.value)}
                            required
                            />
                        </div>
                    </div>
                <div className="row">
                    <div className="col col-lg-2">
                        <label htmlFor="pais"
                        className="form-label cor1"
                        >País</label>
                        <input type="text" 
                        className="form-control"
                        minLength={3}
                        maxLength={20}
                        id="pais"
                        value={pais}
                        onChange={(e) => setPais(e.target.value)}
                        required
                        />
                    </div>
                    <div className="col col-lg-2">
                        <label htmlFor="estado"
                        className="form-label cor1"
                        >Estado</label>
                        <input type="text" 
                        className="form-control"
                        minLength={2}
                        maxLength={2}
                        id="estado"
                        value={estado}
                        onChange={(e) => setEstado(e.target.value)}
                        required
                        />
                    </div>
                    <div className="col col-lg-4">
                        <label htmlFor="cidade"
                        className="form-label cor1"
                        >Cidade</label>
                        <input type="text" 
                        className="form-control"
                        minLength={3}
                        maxLength={40}
                        id="cidade"
                        value={cidade}
                        onChange={(e) => setCidade(e.target.value)}
                        required
                        />
                    </div>
                    <div className="col col-lg-4">
                        <label htmlFor="bairro"
                        className="form-label cor1"
                        >Bairro</label>
                        <input type="text" 
                        className="form-control"
                        minLength={3}
                        maxLength={60}
                        id="bairro"
                        value={bairro}
                        onChange={(e) => setBairro(e.target.value)}
                        required
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <label htmlFor="rua"
                        className="form-label cor1"
                        >Rua</label>
                        <input type="text" 
                        className="form-control"
                        minLength={2}
                        maxLength={60}
                        id="rua"
                        value={rua}
                        onChange={(e) => setRua(e.target.value)}
                        required
                        />
                    </div>
                    <div className="col col-lg-2">
                        <label htmlFor="numero"
                        className="form-label cor1"
                        >Número</label>
                        <input type="text" 
                        className="form-control"
                        minLength={1}
                        maxLength={7}
                        id="numero"
                        value={numero}
                        onChange={(e) => setNumero(e.target.value)}
                        required
                        />
                    </div>
                    <div className="col col-lg-3">
                        <label htmlFor="complemento"
                        className="form-label cor1"
                        >Complemento</label>
                        <input type="text" 
                        className="form-control"
                        minLength={4}
                        maxLength={40}
                        id="complemento"
                        value={complemento}
                        onChange={(e) => setComplemento(e.target.value)}
                        required
                        />
                    </div>
                </div>
            </div>
        </form>
    )
}