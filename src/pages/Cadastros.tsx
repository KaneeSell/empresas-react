import Menu from '../components/Menu'
import RenderCards from '../components/RenderCards'
import { useEffect, useState } from 'react'
import { ListaDB } from '../hooks/ConexaoDB'
import Header from '../components/Header'

export default function Cadastros(){
    const tabelaItens:string[] = ['ID', 'NomeRazão', 'Nome Fantasia', 'CNPJ', 'Ações']
    const [lista, setLista] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const data = await ListaDB()
            setLista(data);
        }
        fetchData()
    },[])
    return (
        <>
            <Menu localAtivo='cadastros'>
            <Header cabecalho='Empresas'/>
            <div className='d-flex flex-column align-items-center justify-content-center'>
                <RenderCards 
                ItensCabecalho={tabelaItens}
                dadosCards={lista}/>
            </div>
            </Menu>
        </>
    )
}