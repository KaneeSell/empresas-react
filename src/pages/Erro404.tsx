import Menu from '../components/Menu'

export default function Erro404(){
    return (
        <Menu>
            <div className='d-flex flex-column justify-content-center align-items-center vh-100 vw-100'>
                <h1 className='fw-bold fs-1 text-danger'>Erro 404 </h1>
                <h2>A página solicitada não foi encontrada!</h2>
                <a 
                className='btn btn-outline-primary'
                href="/inicio"
                >
                    Voltar a pagina inicial</a>
            </div>
        </Menu>
    )
}