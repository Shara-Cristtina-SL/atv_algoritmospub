
export function eh_positivo(valor){
    if(valor > 0){
        return true
    }else{
        return false
    }
}

export function eh_negativo(valor){
    if(valor == 0){
        return false
    }
    if(eh_positivo(valor)){
        return false
    }else{
        return true
    }
}

export function tem_maisdeum(vetor, numero){
    let contador = 0
    for(let valor of vetor){
        if(valor == numero){
            contador ++
        }
    }

    if(contador > 1){
        return true
    }else{
        return false
    }
}

export function contar_iguais(vetor,numero){
    let contador = 0
    for(let valor of vetor){
        if(valor == numero){
            contador ++
        }
    }

    return contador
}

export function listar_posicoes(vetor,numero){
    let posicoes_repetidos = []
    for(let i = 0; i < vetor.lengh; i++){
        if(vetor[i] == numero){
            posicoes_repetidos.push(i)
        }
    }
    return posicoes_repetidos
}

export function mostrar_posicoes(vetor, numero){
        const qtd = contar_iguais(vetor,numero)
        return `Há ${qtd} números ${numero}. `
}    
