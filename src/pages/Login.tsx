import { FormEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import styles from '../styles/login.module.css'
import { excluirLogin, lembrarLogin, salvarLogin } from '../hooks/LembrarSenha'
import { MoonIcon, RecuperaTaxIcon, SunIcon } from '../components/Icons'

function Login() {

  const navigate = useNavigate()
  const [usuario, setUsuario] = useState('')
  const [senha, setSenha] = useState('')
  const [mensagem, setMensagem] = useState('')
  const [lembrar, setLembrar] = useState(false)
  
  useEffect(() => {
    const lembrar = lembrarLogin()
    if(lembrar){
      setUsuario(lembrar.usuario)
      setSenha(lembrar.senha)
      setLembrar(true)
    }
  },[])

  function submitLogin(e:FormEvent){
    e.preventDefault()
    if(
      usuario === 'admin' &&
      senha === 'admin'
    ){
      if(lembrar === true){
        salvarLogin(usuario, senha)
      } else {
        excluirLogin()
      }
      navigate('./inicio')
    } else {
      setMensagem('Usuário ou senha inválido!')
    }
  }

  return (
    <div className={`${styles.fundoLogin}
    d-flex vh-100 justify-content-center 
    align-items-center bg-body`}>
      <div className="modal-dialog">
        <div className={`${styles.cardLogin}
        modal-content rounded-4 shadow bg-body
          `}>
          <div className={`
            modal-header d-flex flex-column pb-2 pt-4
            `}>
            <RecuperaTaxIcon tamanho='200px'/>
            <span className='fs-6 font1'>Seja bem Vindo!</span>
          </div>
          <div className="modal-body p-5 pt-0">
            <form onSubmit={(e) => submitLogin(e)}>
              <div className="form-floating mb-3">
                <input 
                className="form-control rounded-3 shadow-none input-form1"
                type="text"
                id="usuario"
                value={usuario}
                onChange={(e) => {setUsuario(e.target.value); setMensagem('')}}
                placeholder="Usuario"
                required/>
                <label htmlFor="usuario">Usuário</label>
              </div>
              <div className="form-floating mb-3">
                <input 
                className="form-control rounded-3 shadow-none input-form1" 
                type="password" 
                id="senha" 
                value={senha}
                onChange={(e) => {setSenha(e.target.value); setMensagem('')}}
                placeholder="Senha"
                required/>
                <label htmlFor="senha">Senha</label>
              </div>
              {mensagem != '' ? (
              <div className='alert alert-danger text-center' role='alert'>
                {mensagem}
              </div>
              ) : false}
              <div className="d-flex justify-content-between align-items-center">
                <div className="form-check">
                  <input 
                  className="form-check-input"
                  type="checkbox" 
                  name="lembrar" 
                  id="lembrar"
                  checked={lembrar}
                  onChange={(e) => setLembrar(e.target.checked)}
                   />
                  <label 
                  className="form-check-label cor1 font2 fs-6"
                  htmlFor="lembrar"
                  >Lembrar</label>
                </div>
                <a 
                className={`${styles.letraEsq}
                  ms-5
                  text-primary text-decoration-none font2 fs-6 cor1
                  `}
                href="#"
                >Esqueci minha senha</a>
              </div>
              <div className='d-flex justify-content-center flex-column'>
              <button 
              className='btn btn-tema3 w-100 mt-4 fw-bold font3 rounded-1'
              type="submit"
              >LOGIN</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
