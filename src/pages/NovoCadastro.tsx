import Menu from "../components/Menu";
import Header from "../components/Header";
import FormCadastro from "../components/FormCadastro";

export default function NovoCadastro(){
    return (
        <Menu>
            <Header cabecalho="Novo Cadastro"/>
            <FormCadastro funcao="novo"/>
        </Menu>
    )
}