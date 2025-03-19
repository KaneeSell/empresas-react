import { FaMagnifyingGlassDollar } from 'react-icons/fa6'
import { LiaRobotSolid } from "react-icons/lia";
import styles from '../styles/menu.module.css'
import { ArquivoIcon, EditIcon, ExpandirIcon, 
        HomeIcon, NotificacaoIcon, PeopleIcon, 
        RecuperaTaxIcon, RelatorioIcon, UserProfile } from "./Icons"
import { Hr } from './Utils'
import { PiLifebuoyBold } from 'react-icons/pi';
import { useNavigate } from 'react-router';

interface MenuProps{
    localAtivo?: string,
    children: any
}

export default function Menu(props: MenuProps){
    const navegar = useNavigate()
    return (
        <div className="m-0 p-0">
            <nav className="navbar bg-bege pe-3">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <RecuperaTaxIcon tamanho="150px"/>
                    </a>
                    <div className="d-flex gap-2">
                        <button className={`${styles.navBtn} btn btn-body`}>
                            <NotificacaoIcon tamanho="17px"/>
                        </button>
                        <button className={`${styles.navBtn} btn btn-body`}>
                            <UserProfile tamanho="17px"/>
                        </button>
                    </div>
                </div>
            </nav>
            <Hr className='p-05 btn-tema4'/>
            <nav className={styles.navbarLateralFundo}>

            </nav>
            <nav className={`${styles.navbarLateral}`}>
                <div className='d-flex justify-content-between align-items-center flex-column gap-1 h-93'>
                    <div className='d-flex justify-content-start align-items-center flex-column gap-1'>
                        <div onClick={()=>navegar('/inicio')}
                        className={`${props.localAtivo === 'inicio'? styles.navAtivo:styles.navInativo} cursor-pointer`}>
                            <HomeIcon tamanho='22px' className={``}/>
                        </div>
                        <div onClick={()=>navegar('/cadastros')}
                        className={`${props.localAtivo === 'cadastros'? styles.navAtivo:styles.navInativo} cursor-pointer`}>
                            <EditIcon tamanho='22px' className=''/>
                        </div>
                        <div className={`${props.localAtivo === 'arquivos-fiscais'? styles.navAtivo:styles.navInativo} cursor-pointer`}>
                            <ArquivoIcon tamanho='22px' className=''/>
                        </div>
                        <div onClick={()=>navegar('/planilhas')}
                        className={`${props.localAtivo === 'planilhas'? styles.navAtivo:styles.navInativo} cursor-pointer`}>
                            <RelatorioIcon tamanho='22px' className=''/>
                        </div>
                        <div className={`${props.localAtivo === 'diagnostico-express'? styles.navAtivo:styles.navInativo} cursor-pointer`}>
                            <FaMagnifyingGlassDollar size={'22px'} className=''/>
                        </div>
                        <div className={`${props.localAtivo === 'consultor-ia'? styles.navAtivo:styles.navInativo} cursor-pointer`}>
                            <LiaRobotSolid size={'22px'} className=''/>
                        </div>
                        <div className={`${props.localAtivo === 'area-membros'? styles.navAtivo:styles.navInativo} cursor-pointer`}>
                            <PeopleIcon tamanho='22px' className=''/>
                        </div>
                    </div>
                    <div className='d-flex justify-content-end align-items-end'>
                        <div className={`${props.localAtivo === 'abrir-chamado'? styles.navAtivo:styles.navInativo} cursor-pointer`}>
                            <PiLifebuoyBold size={'22px'} className=''/>
                        </div>
                    </div>
                </div>
            </nav>
            <nav className={styles.navbarExpandida}>
                <div className='d-flex justify-content-between align-items-center flex-column gap-1 h-93'>
                    <div className='d-flex justify-content-start align-items-center flex-column gap-1'>
                        <div onClick={()=>navegar('/inicio')}
                        className={`${props.localAtivo === 'inicio'? styles.navExternaAtivo:styles.navExtarnaInativo} cursor-pointer`}>
                            <span>Inicio</span>
                        </div>
                        <div onClick={()=>navegar('/cadastros')}
                        className={`${props.localAtivo === 'cadastros'? styles.navExternaAtivo:styles.navExtarnaInativo} cursor-pointer`}>
                            <span >Cadastros</span>
                            <ExpandirIcon tamanho='20px' className={`${props.localAtivo === 'cadastros'? styles.iconExRecAtiv:styles.iconExRecInat} mb-1`}/>
                        </div>
                        <div className={`${props.localAtivo === 'arquivos-fiscais'? styles.navExternaAtivo:styles.navExtarnaInativo} cursor-pointer`}>
                            <span>Arquivos Fiscais</span>
                            <ExpandirIcon tamanho='20px' className={`${props.localAtivo === 'arquivos-fiscais'? styles.iconExRecAtiv:styles.iconExRecInat} mb-1`}/>
                        </div>
                        <div onClick={()=>navegar('/planilhas')}
                        className={`${props.localAtivo === 'planilhas'? styles.navExternaAtivo:styles.navExtarnaInativo} cursor-pointer`}>
                            <span>Relatório</span>
                            <ExpandirIcon tamanho='20px' className={`${props.localAtivo === 'planilhas'? styles.iconExRecAtiv:styles.iconExRecInat} mb1`}/>
                        </div>
                        <div className={`${props.localAtivo === 'diagnostico-express'? styles.navExternaAtivo:styles.navExtarnaInativo} cursor-pointer`}>
                            <span className=''>Diagnóstico Express</span>
                        </div>
                        <div className={`${props.localAtivo === 'consultor-ia'? styles.navExternaAtivo:styles.navExtarnaInativo} cursor-pointer`}>
                            <span className=''>Consultor IA</span>
                        </div>
                        <div className={`${props.localAtivo === 'area-membros'? styles.navExternaAtivo:styles.navExtarnaInativo} cursor-pointer`}>
                            <span className=''>Área de Membros</span>
                        </div>
                    </div>
                    <div className='d-flex justify-content-end align-items-end'>
                        <div className={`${props.localAtivo === 'abrir-chamado'? styles.navExternaAtivo:styles.navExtarnaInativo} cursor-pointer`}>
                            <span className=''>Abrir Chamado</span>
                        </div>
                    </div>
                </div>
            </nav>
            <div className={styles.conteudoDiv}>
                {props.children}
            </div>
        </div>
    )
}