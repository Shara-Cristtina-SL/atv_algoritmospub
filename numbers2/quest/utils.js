import { question} from 'readline-sync'

export function get_number(num){
    const numero = Number(question(num))
    return numero
}

export function mostre(mensagem){
    console.log(mensagem)
}

export function get_number_inrange(num,min,max){
    const numero = get_number(num)

    if(numero < min || numero > max){
        mostre(`Valor inválido!`)
        return get_number_inrange(num,min,max)
    }
        return numero
    
}

export function limpar_tela(){
    console.clear()
}

export function positive_number(num){
    const numero = get_number(num)

    if(numero <= 0 ){
        mostre(`Valor inválido!`)
        return positive_number(num)
    }else{
        return numero
    }
}

export function get_text(mensagem){
    const texto = question(mensagem)

    return texto
     }

export function enter_para_continuar(){
    const enter = question('Aperte Enter para continuar.')
}