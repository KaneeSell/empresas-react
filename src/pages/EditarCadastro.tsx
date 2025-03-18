import { useParams } from "react-router";
import Menu from "../components/Menu";
import Header from "../components/Header";
import FormCadastro from "../components/FormCadastro";

export default function EditarCadastro(){
    const { id } = useParams()

    return (
        <Menu>
            <Header cabecalho="Editar Cadastro"/>
            <div className="d-flex m-4">
                <FormCadastro funcao="edit" id={id}/>
            </div>
        </Menu>
    )
}