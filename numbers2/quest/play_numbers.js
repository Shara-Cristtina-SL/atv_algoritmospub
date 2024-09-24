import {mostre,get_number_inrange,get_number, limpar_tela,enter_para_continuar, get_text, positive_number} from '../quest/utils.js'
import { chamar_sub_opcoes,adcionar_valores,remover_porvalor,remover_porposicao, resetar_vetor,embaralhar_vetor, contar_elementos,bubble_sort, buscar_maior_vetor_valor, buscar_maior_vetor_posicao, buscar_menor_vetor_valor, buscar_menor_vetor_posicao, somar_elementos, calcular_media_elementos, buscar_positivos, contar_positivos, buscar_negativos, contar_negativos, chamar_sub10_opcoes, salvar_vetor, editar_porposicao } from './vetor_funcionalidades.js'

function main(lista_vetor = []){

    let opcoes = menu(1.0)
    let opcao_escolhida = get_number_inrange(opcoes,1,16)
    let sub_opcao_escolhida
    let sub_opcao10_escolhida

    limpar_tela()

    if(opcao_escolhida == 1){
        opcoes = menu(1.1)
        sub_opcao_escolhida = get_number_inrange((opcoes),1,3)
 
        limpar_tela()
 
        lista_vetor = chamar_sub_opcoes(sub_opcao_escolhida)
    }

    else if(opcao_escolhida == 2){
        limpar_tela()
        mostre(lista_vetor)
    }

    else if(opcao_escolhida == 3){
        lista_vetor = resetar_vetor(lista_vetor)
    }

    else if(opcao_escolhida == 4){
        const qtd_elementos = contar_elementos(lista_vetor)
        mostre(`O vetor possui ${qtd_elementos} elementos.`)

    }

    else if(opcao_escolhida == 5){
        const maior_elemento = buscar_maior_vetor_valor(lista_vetor)
        const posicao_domaior = buscar_maior_vetor_posicao(lista_vetor)
        const menor_elemento = buscar_menor_vetor_valor(lista_vetor)
        const posicao_do_menor = buscar_menor_vetor_posicao(lista_vetor)

        mostre(`
            As posições são contadas a partir do 0
           ---------------------------------------
            MAIOR VALOR: ${maior_elemento} 
            POSIÇÃO: ${posicao_domaior}
           ---------------------------------------
            MENOR VALOR: ${menor_elemento}  
            POSIÇÃO: ${posicao_do_menor}
            `)
    }

    else if(opcao_escolhida == 6){
        const somatorio = somar_elementos(lista_vetor)

        mostre(`O somatório dos vetores é igual a ${somatorio}.`)
    }
    else if(opcao_escolhida == 7){
        const media = calcular_media_elementos(lista_vetor)

        mostre(`A média dos elementos é ${media.toFixed(2)}.`)
    }
    else if(opcao_escolhida == 8){
        const positivos = buscar_positivos(lista_vetor)
        const qtd_positivos = contar_positivos(lista_vetor)

        mostre(`
            Há ${qtd_positivos} valor(es) positivo(s).
            São eles: ${positivos}`)
    }
    else if(opcao_escolhida == 9){
        const negativos = buscar_negativos(lista_vetor)
        const qtd_negativos = contar_negativos(lista_vetor) 

        mostre(`
            Há ${qtd_negativos} valor(es) negativo(s).
            São eles: ${negativos}`)

    }else if(opcao_escolhida == 10){
        opcoes = menu(1.2)
        sub_opcao10_escolhida = get_number_inrange((opcoes),1,6)
 
        limpar_tela()
        if(sub_opcao10_escolhida == 1){
            const fator = get_number('Digite o valor do fator a ser multiplicado pelo vetor:  ')
            lista_vetor = chamar_sub10_opcoes(sub_opcao10_escolhida,lista_vetor,fator,0,0,0,0)

        }else if(sub_opcao10_escolhida == 2){
            const expoente = get_number('Digite o expoente:  ')
            lista_vetor = chamar_sub10_opcoes(sub_opcao10_escolhida,lista_vetor,0,expoente,0,0,0)

        }else if(sub_opcao10_escolhida == 3){
            let fracao = get_text('Digite a fração:  ')
            fracao = fracao.split('/')

            lista_vetor = chamar_sub10_opcoes(sub_opcao10_escolhida,lista_vetor,0,0,fracao,0,0)

        }else if(sub_opcao10_escolhida == 4){
            const valor_min = positive_number('Digite o valor minimo:  ')
            const valor_max = positive_number('Digite o valor máximo:  ')
            lista_vetor = chamar_sub10_opcoes(sub_opcao10_escolhida,lista_vetor,0,0,0,valor_min,valor_max)

        }else if(sub_opcao10_escolhida == 5){
            const reverse = get_number_inrange('Digite 1 para reverse e 0 para não:  ',0,1)
            if(reverse==0){
                lista_vetor = bubble_sort(lista_vetor,false,v=>Number(v))
            }else{
                lista_vetor = bubble_sort(lista_vetor,true,v=>Number(v))
            }
        }else if(sub_opcao10_escolhida == 6){
            embaralhar_vetor(lista_vetor)
        }
    
    }else if(opcao_escolhida == 11){
        const qtd_new_valores = positive_number('Digite quantos valores quer adcionar:  ')
        lista_vetor = adcionar_valores(lista_vetor, qtd_new_valores)
    }else if(opcao_escolhida == 12){
        const qtd_removidos = positive_number('Digite a quantidade de números a serem removidos:  ')
        lista_vetor = remover_porvalor(lista_vetor, qtd_removidos)
    }else if(opcao_escolhida == 13){
        const qtd_removidos = positive_number('Digite a quantidade de números a serem removidos:  ')
        lista_vetor = remover_porposicao(lista_vetor, qtd_removidos)
    }else if(opcao_escolhida == 14){
        const posicao = get_number('Digite o índice do valor a ser editado: ')
        lista_vetor = editar_porposicao(lista_vetor,posicao)
    }else if(opcao_escolhida == 15){
        salvar_vetor(lista_vetor)
    }

    if(opcao_escolhida != 16){
        enter_para_continuar()
        limpar_tela()
        main(lista_vetor)
    }else{
        limpar_tela()
        salvar_vetor(lista_vetor)
    }
}

function menu(numero){
    if(numero == 1.0){
    
        return`
             Digite:
             1  para inicializar vetor numérico 
             2  para mostrar todos os valores 
             3  para resetar vetor
             4  para ver quantidade de itens no vetor
             5  para ver menor e maior valores e suas posições 
             6  para mostras somatório dos valores
             7  para mostrar média dos valores
             8  para mostrar valores positivos e quantidade
             9  para mostrar valores negativos e suas quantidades
             10 para atualizar todos os valores
             11 para adicionar novos valores 
             12 para remover itens por valor exato
             13 para remover por posição
             14 para editar valor específico por posição 
             15 para salvar valores
             16 para salvar e sair
             
             >>>  `
         
    }else if (numero == 1.1){
         return`
             Deseja criar um vetor ao:
             1. informar valores manualmente
             2. informar valor minínimo, máximo e tamanho da lista a ser gerada
             3. carregar valores de um arquivo
             
             >>>  `
    }else if (numero == 1.2){
        return`
        Escolha uma regra para atualizar o vetor:

        1. Multiplicar por um valor
        2. Elevar a um valor (exponenciação)
        3. Reduzir a uma fração (pedir a fração fração ex: 1⁄5)
        4. Substituir valores negativos por um número aleatórios da uma faixa(min, max)
        5. Ordenar valores (reverse?)
        6. Embaralhar valores

        >>>  `
    }
    
 }
 
 main()
 