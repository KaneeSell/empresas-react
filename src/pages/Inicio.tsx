import Header from '../components/Header'
import Menu from '../components/Menu'
import { Hr } from '../components/Utils'
import LerMD from '../components/LerMD'

export default function Inicio(){
    return (
        <>
            <Menu localAtivo='inicio'>
                <Header cabecalho='Início'/>
                <Hr/>
                <div className='d-flex justify-content-start align-items-center flex-column container cor1 ms-5 me-3'>
                    <LerMD/>
                </div>
            </Menu>
        </>
    )
}