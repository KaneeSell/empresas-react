import Empresas from '../hooks/Cadastros'
import { EditIcon, EyesIcon, TrashIcon } from './Icons'
import { Remover } from '../hooks/ConexaoDB'
import { useNavigate } from 'react-router'
import styles from '../styles/renderCards.module.css'

interface RenderTableProps{
    ItensCabecalho: string[]
    dadosCards: Empresas[]
}
export default function RenderCards(props:RenderTableProps){
    const navegar = useNavigate()
    
    function removerRecarregar(empresaId: number){
        Remover(empresaId)
        window.location.reload()
    }
    function editarNavegar(empresaId: number){
        navegar(`/editar-cadastro/${empresaId}`)
    }
    return(
        <div className={`${styles.responseCardAvo}`}>{props.dadosCards.length > 0? props.dadosCards.map((empresa) => (
            <div className={`shadow1
                  cor1 rounded-2 tema1 ${styles.responseCardPai}`}
            key={empresa.id}>
                    <div className={`${styles.responseCard}d-flex flex-column justify-content-start`}>
                        <span className='d-block'>Nome: <span className='fw-bold'>{empresa.nome}</span></span>
                        <span className='d-block'>E-mail: <span className='fw-bold'>{empresa.email}</span></span>
                    </div>
                    <div className={`${styles.responseCard}d-flex flex-column justify-content-start`}>
                        <span className='d-block'>CNPJ: <span className='fw-bold'>{empresa.cnpj}</span></span>
                        <span className='d-block'>Estado: <span className='fw-bold'>{empresa.estado}</span></span>
                    </div>
                    <div className={`${styles.responseCard}d-flex flex-column justify-content-start`}>
                        <span className='d-block'>Contato: <span className='fw-bold'>{empresa.contato}</span></span>
                        <span className='d-block'>Cidade: <span className='fw-bold'>{empresa.cidade}</span></span>
                    </div>
                    <div className='d-flex p-4 flex-row gap-2'>
                        <button className='btn btnCardView'
                        onClick={() => editarNavegar(empresa.id)}
                        >
                            <EyesIcon tamanho='25px' className={styles.icon}/>
                        </button>
                        <button className='btn btnCardEdit'
                        onClick={() => editarNavegar(empresa.id)}
                        >
                            <EditIcon tamanho='25px' className={styles.icon}/>
                        </button>
                        <button className='btn btnCardRemove'
                        onClick={() => removerRecarregar(empresa.id)}>
                            <TrashIcon tamanho='25px' className={styles.icon}/>
                        </button>
                    </div>
                </div>
        )):(<></>)}</div>
    )
}