
import {mostre,get_number_inrange, limpar_tela, positive_number,get_number, get_text, enter_para_continuar} from './utils.js'
import {readFileSync,writeFileSync} from 'fs'
import {eh_positivo} from '../quest/vetor_utils.js'

export function contar(vetor,criterio){
    let qtd = 0

    for(let elemento of vetor){
        if(criterio(elemento)){
            qtd++
        }
    }
    return qtd
}

export function reduzir(vetor, funcao, valor_inicial, eh_posicao){
    let acumulado = valor_inicial
    let posicao
  
    for (let i = 0; i < vetor.length; i++){
      acumulado = funcao(acumulado, vetor[i])

      if(eh_posicao){
        if(vetor[i] == acumulado){
            posicao = i
        }
      }
    }

    if(eh_posicao){ 
        return posicao
    }
    
    return acumulado
  }
  export function filtrar(vetor, criterio){
    const nova_lista = []

    for (let numero of vetor){
     if (criterio(numero)){
      nova_lista.push(numero)
     } 
    }
    return nova_lista
}


export function sub1_opcao1(){
    let valor
    let tamanho_vetor
    const lista_vetor = []

    tamanho_vetor = positive_number('Digite o tamanho do vetor:  ')

        for(let i = 0; i < tamanho_vetor; i++){
            valor = get_number('Digite um valor para o vetor:  ')
            lista_vetor.push(valor)
        }
        return lista_vetor
}

export function gerar_numero_aleatorio(min,max){
    return Math.floor(Math.random() * (max-min +1)) + min
}

function gerar_vetor_automatico(tamanho_vetor,max,min){
    const lista = []
    let valor
    for(let i = 0; i<tamanho_vetor;i++){
        valor = gerar_numero_aleatorio(min,max)

        lista.push(valor)
    }

    return lista
}

function sub1_opcao2(){
    let tamanho_vetor
    
    const valor_minimo = get_number('Digite o valor mínimo:  ')
    const valor_maximo = get_number('Digite o valor máximo:  ')
    tamanho_vetor = positive_number('Digite o tamanho do vetor:  ')

    const lista_vetor = gerar_vetor_automatico(tamanho_vetor, valor_maximo, valor_minimo)
    
    return lista_vetor
}

function sub1_opcao3(){
    mostre(`Separe os numeros do arquivo por linhas.`)

    const caminho_arquivo = get_text('Digite o caminho do arquivo (use barras duplicadas):  ')

    //teste
    //const caminho_arquivo  = 'C:\Users\ACER\OneDrive\Desktop\numbers2\quest\my_numbers.txt'

    const arquivo = readFileSync(caminho_arquivo, 'utf-8')

    const lista_vetor = arquivo.split('\n')

    return lista_vetor
}

export function chamar_sub_opcoes(sub_opcao_escolhida){
    let lista_vetor 
    if(sub_opcao_escolhida == 1){
        lista_vetor = sub1_opcao1()
        
    }else if(sub_opcao_escolhida == 2){
        lista_vetor = sub1_opcao2()
         
    }else{
        lista_vetor = sub1_opcao3()
    }

    return lista_vetor
}

export function resetar_vetor(vetor){
    vetor = []
    return vetor

}

export function somar_elementos(vetor){
    let somatorio = 0

    for(let elemento of vetor){
        somatorio += elemento
    }

    return somatorio
}

export function calcular_media_elementos(vetor){
    let somatorio = somar_elementos(vetor)
    let tamanho_vetor = contar_elementos(vetor)

    return somatorio/tamanho_vetor
}

export function buscar_positivos(vetor){
    const lista_positivos = []
    for(let elemento of vetor){
        if(eh_positivo(elemento) == true){
            lista_positivos.push(elemento)
        }
    }

    return lista_positivos
}

export function buscar_negativos(vetor){
    const lista_negativos = []
    for(let elemento of vetor){
        if(eh_positivo(elemento) == false && elemento != 0){
            lista_negativos.push(elemento)
        }
    }

    return lista_negativos
}

export function atualizar_vetor(vetor,regra){
    let elemento_atualizado
    const vetor_atualizado = []

    for(let elemento of vetor){
        elemento_atualizado = regra(elemento)
        vetor_atualizado.push(elemento_atualizado)
    }

    return vetor_atualizado
}

export function atualizar_vetor_se(vetor,regra,criterio){
    let elemento_atualizado
    const vetor_atualizado = []

    for(let elemento of vetor){
        if(criterio(elemento)){
            elemento_atualizado = regra(elemento)
            vetor_atualizado.push(elemento_atualizado)
        }else{
            vetor_atualizado.push(elemento)
        }
    }

    return vetor_atualizado
}
// Para evitar floats desnecessários
function aplicar_fracao(vetor,numerador,denominador){
    let vetor_anterior = vetor
        vetor = []
        for(let valor of vetor_anterior){

            if((valor * (numerador/denominador)) % Math.floor(valor * (numerador/denominador)) != 0){
                vetor.push(Number((valor * (numerador/denominador)).toFixed(2) ))
            }else{
                vetor.push(valor * (numerador/denominador))
            }
        }
        return vetor
}
export function embaralhar_vetor(vetor){
    for (let i = vetor.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [vetor[i], vetor[j]] = [vetor[j], vetor[i]];
    }
}

export function chamar_sub10_opcoes(sub_opcao,vetor,fator,expoente,fracao,min,max){
        let regra

    if(sub_opcao == 1){
        regra = v=> v * fator
    
        vetor = atualizar_vetor(vetor, regra)

    }else if(sub_opcao == 2){
        regra  = v=> v** expoente

        vetor = atualizar_vetor(vetor, regra)
    }else if(sub_opcao == 3){
        let numerador = Number( fracao[0] )
        let denominador = Number(fracao[1])

        vetor = aplicar_fracao(vetor, numerador, denominador)
    
    }else if(sub_opcao == 4,min,max){
        const criterio = v => v < 0

        regra = v => v = Math.floor(Math.random()*((max - min + 1)))+min

        vetor = atualizar_vetor_se(vetor,regra,criterio)
    }
    return vetor
}

export function bubble_sort(colecao, reverse=False, criterio = v=>v){
    let ultima_pos_n_ordenada = colecao.length - 1 
    let houve_troca = false

    while (ultima_pos_n_ordenada > 0){
        let aux
        houve_troca = false
        for (let i = 0; i< ultima_pos_n_ordenada; i++){
            if (!reverse){
                if (criterio(colecao[i]) > criterio(colecao[i+1])){
                    aux = colecao[i]
                    colecao[i] = colecao[i+1]
                    colecao[i+1] = aux
                    houve_troca = true
                }    
            }else{
                if (criterio(colecao[i]) < criterio(colecao[i+1])){
                    aux = colecao[i]
                    colecao[i] = colecao[i+1]
                    colecao[i+1] = aux
                    houve_troca = true
                }
            }        
        }            
        ultima_pos_n_ordenada--

        if (!houve_troca) { // Se não houve troca, o array já está ordenado
            mostre(`O vetor já está ordenado!`)

            enter_para_continuar()
            break; 
        }
    }
    return colecao
}
export function adcionar_valores(vetor,qtd){
    let new_valor 
    for(let i = qtd; i>0;i--){
        new_valor = get_number('digite um novo valor:  ')
        vetor.push(new_valor)
    }
    return vetor
}

export function remover_porvalor(vetor, qtd) {
    for (let i = 0; i < qtd; i++) {
        let valor_remv = get_number('Digite um valor para ser removido:  ');
        let j = vetor.length - 1; 
        while (j >= 0) {
            if (vetor[j] === valor_remv) {
                vetor.splice(j, 1); 
            }
            j-- 
        }
    }
    return vetor;
}

export function remover_porposicao(vetor,qtd){
    const tamanho_vetor = vetor.length

    for(let i = qtd; i>0;i--){
        let indice_remv = get_number('Digite o índice do valor a ser removido (desconsidere já removidos da contagem):  ')
        while(indice_remv > (vetor.length -1) || indice_remv < -(vetor.length + 1) ){
            mostre(`índice inválido!`)
            indice_remv = get_number('Digite o índice do valor a ser removido (desconsidere já removidos da contagem) :  ')
        }
        for(let j = (tamanho_vetor -1); j>=0;j--){
            if(j == indice_remv){
                vetor.splice(j,1)
            }
        }
    }
    return vetor
}

export function editar_porposicao(vetor, indice_a_editar){
    const tamanho_vetor = vetor.length 
    let new_valor 
    while(indice_a_editar > (tamanho_vetor -1) || indice_a_editar < -(tamanho_vetor + 1) ){
        mostre(`índice inválido!`)
        indice_a_editar = get_number('Digite o índice do valor a ser editado:  ')
    }
    for(let j = (tamanho_vetor -1); j>=0;j--){
        if(j == indice_a_editar){
           new_valor = get_number('Digite o novo valor: ') 
           vetor[indice_a_editar] = new_valor
        }
    }
    return vetor

}
export function salvar_vetor(vetor){

    const listaEmString = vetor.join('\n');
    const nomeDoArquivo = 'quest/meu_novo_vetor.txt';

    writeFileSync(nomeDoArquivo, listaEmString);

    console.log('Lista salva com sucesso em', nomeDoArquivo);
}

