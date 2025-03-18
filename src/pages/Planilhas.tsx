import Header from '../components/Header'
import Menu from '../components/Menu'
import styles from '../styles/planilhas.module.css'

export default function Planilhas(){
    return (
            <Menu localAtivo='planilhas'>
                <Header cabecalho='Planilhas'/>
                <p className='fs-6 cor1 ms-2'>Acesse uma coleção de planilhas 
                úteis para facilitar suas tarefas 
                diárias e otimizar seu trabalho</p>
                <div className='container-fluid'>
                    <table className="container-fluid ">
                        <thead className={`${styles.tema2} text-light`} >
                            <tr>
                                <th className='p-2 ps-3'>Nome</th>
                                <th className='p-2'>Ação</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='p-2 ps-3'>Cálculo Simples Nacional.xlsx</td>
                                <td className='p-2 ps-3'><a href="#">Download</a></td>
                            </tr>
                            <tr className='bg-bege'>
                                <td className='p-2 ps-3'>Tese Exclusão do ICMS BC PIS Cofins - Bloco C170.xlsb</td>
                                <td className='p-2 ps-3'><a href="#">Download</a></td>
                            </tr>
                            <tr>
                                <td className='p-2 ps-3'>Tese Exclusão do PIS Cofins da própria BC - Bloco C170.xlsb</td>
                                <td className='p-2 ps-3'><a href="#">Download</a></td>
                            </tr>
                            <tr className='bg-bege'>
                                <td className='p-2 ps-3'>Tese Gross Up - Bloco C170.xlsx</td>
                                <td className='p-2 ps-3'><a href="#">Download</a></td>
                            </tr>
                            <tr>
                                <td className='p-2 ps-3'>Tese LC 192 - Bloco C170.xlsb</td>
                                <td className='p-2 ps-3'><a href="#">Download</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
        </Menu>
    )
}