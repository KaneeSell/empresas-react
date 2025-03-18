export function salvarLogin(usuario: string, senha: string){
    localStorage.setItem('lembrar', JSON.stringify({ usuario: {usuario}, senha: {senha}}))
  }

export function lembrarLogin() {
  const lembrarString = localStorage.getItem("lembrar") || null

  if (lembrarString) {
      const lembrar = JSON.parse(lembrarString)
      const usuario = lembrar.usuario.usuario
      const senha = lembrar.senha.senha
      return { usuario, senha }
  }

  return { usuario: "", senha: "" }
}

export function excluirLogin(){
  localStorage.removeItem('lembrar')
}
  