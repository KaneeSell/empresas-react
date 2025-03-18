import { cnpj } from 'cpf-cnpj-validator'

export function validarCNPJ(cnpjInput:string){
    return cnpj.isValid(cnpjInput)
}
export function formatarCNPJ(cnpjInput:string){
    return cnpj.format(cnpjInput)
}