import { useNavigate } from "react-router"
import { LupaIcon, VoltarIcon } from "./Icons"
import styles from '../styles/header.module.css'

interface HeaderProps{
    cabecalho: string
}

export default function Header(props: HeaderProps){
    const navegar = useNavigate()
    return (
        <div className="w-100 d-flex flex-column wrap align-items-start">
            <div className="d-flex w-100 flex-row justify-content-between">
                <div className="d-flex flex-row">
                    {props.cabecalho === 'Início'? false:(<div onClick={()=>{
                        if(props.cabecalho === 'Novo Cadastro' || props.cabecalho === 'Editar Cadastro'){
                            navegar('/cadastros')
                        }else{
                            navegar('/inicio')}}
                        }
                    className={`${styles.iconVoltar} d-flex ms-2`}>
                        <VoltarIcon
                        tamanho="40px" className="mb-3 cor1"/>
                    </div>)}
                    <p className={`
                    fw-bold fs-1 text-primary text-start cor1 ms-3
                    `}>
                        {props.cabecalho}
                    </p>
                </div>
                {props.cabecalho === 'Empresas'? (<div className={`${styles.btnsResponse}`}>
                    <div className={`${styles.btnsResponse2} input-group my-3`}>
                        <span className="input-group-text btn-tema1" id="basic-addon1"><LupaIcon tamanho="20px"/></span>
                        <input type="text" 
                        className="form-control" 
                        placeholder="Pesquisar..." 
                        aria-label="Pesquisar" 
                        aria-describedby="basic-addon1"/>
                    </div>
                    <button onClick={()=>navegar('/novo-cadastro')}
                    className={`${styles.btnsResponse2} btn btn-tema1 rounded-1 my-3`}>
                        Cadastrar
                    </button>
                </div>): false}
            </div>
        </div>
    )
}