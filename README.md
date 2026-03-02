# Lista de Compras

Aplicacao web para organizar compras da semana, com adicao, remocao, marcacao de itens concluidos e feedback visual de acoes.

## Descricao

Projeto desenvolvido com HTML, CSS e JavaScript puro, com foco em:

- interface limpa e responsiva (desktop e mobile)
- interacao rapida para gerenciar itens
- validacoes simples de formulario
- feedback visual com alerta no rodape

## Funcionalidades

- Titulo da pagina: **Compras da semana**
- Botao **Voltar** para desfazer o ultimo item inserido manualmente
- Campo de input para novos itens
- Botao **Adicionar item**
- Lista inicial com itens pre-cadastrados
- Cada item possui checkbox, nome e botao de remover (icone de lixeira)
- Remocao com alerta de confirmacao
- Alerta com fechamento automatico e opcao de fechar no `x`
- Marcar e desmarcar item como concluido
- Layout responsivo para celular

## Tecnologias

- HTML5
- CSS3
- JavaScript (ES6+)

## Estrutura do projeto

```bash
.
|- index.html
|- styles.css
|- script.js
`- assets/
   `- icons/
      `- logo.png
```

## Como executar localmente

1. Baixe ou clone este repositorio.
2. Abra o arquivo `index.html` no navegador.

Nao e necessario instalar dependencias.

## Melhorias futuras

- Salvar a lista no `localStorage`
- Editar itens ja criados
- Filtrar por concluidos e pendentes
- Confirmacao opcional antes de remover item

## Autor

Projeto desenvolvido por **Gabriel**.
