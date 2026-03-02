# Lista de Compras

Aplicacao web simples para organizar compras da semana, com adicao, remocao, marcacao de itens concluidos e alerta visual de acoes.

## Descricao

Este projeto foi desenvolvido com HTML, CSS e JavaScript puro, focando em:

- interface limpa e responsiva (desktop e mobile)
- interacao rapida para gerenciar itens da lista
- validacoes basicas de formulario
- feedback visual para acoes do usuario

## Funcionalidades

- Titulo da pagina: **Compras da semana**
- Botao **Voltar** com funcao de desfazer o ultimo item inserido manualmente
- Campo para adicionar novos itens
- Botao **Adicionar item**
- Lista com itens iniciais pre-cadastrados
- Cada item possui:
  - checkbox para marcar como concluido
  - nome do item
  - botao de remover com icone de lixeira
- Remocao de item com alerta no rodape
- Alerta com fechamento automatico e opcao de fechar no `x`
- Layout responsivo para telas menores

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
`- icons.css
```

## Como executar localmente

1. Baixe ou clone este repositorio.
2. Abra o arquivo `index.html` no navegador.

Nao e necessario instalar dependencias.

## Melhorias futuras (opcional)

- Persistir lista no `localStorage`
- Editar nome de itens ja criados
- Filtro por itens concluidos/pendentes
- Confirmacao antes de remover item

## Autor

Projeto desenvolvido por **Gabriel**.
