import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import '../styles/index.css'
import Layout from '../components/Layout'
import Login from './Login'
import Inicio from './Inicio'
import Cadastros from './Cadastros'
import Planilhas from './Planilhas'
import Erro404 from './Erro404'
import NovoCadastro from './NovoCadastro'
import EditarCadastro from './EditarCadastro'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Layout>
      <HashRouter>
        <Routes>
          <Route path={'/'} element={<Login/>} />
          <Route path={'/inicio'} element={<Inicio/>} />
          <Route path={'/cadastros'} element={<Cadastros/>} />
          <Route path={'/novo-cadastro'} element={<NovoCadastro/>} />
          <Route path={'/editar-cadastro/:id'} element={<EditarCadastro/>} />
          <Route path={'/planilhas'} element={<Planilhas/>} />
          <Route path={'/*'} element={<Erro404/>} />
        </Routes>
      </HashRouter>
    </Layout>
  </StrictMode>,
)
