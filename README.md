-----

# 📚 Projeto: Pilhas em Java e Árvores de Decisão em ML 🌳

Este repositório contém o material de um estudo aprofundado que conecta uma estrutura de dados fundamental, a **Pilha**, com um dos algoritmos mais importantes de Machine Learning, a **Árvore de Decisão**. O projeto inclui um artigo técnico detalhado e uma apresentação interativa em HTML, CSS e JavaScript.

O objetivo é demonstrar não apenas a teoria, mas também a aplicação prática e as melhores práticas de desenvolvimento, desde a escolha da implementação correta de uma pilha em Java até a construção e otimização de modelos de Machine Learning.

## ✨ Conteúdo do Repositório

  * **`/artigo_tecnico.md`**: Um artigo completo e detalhado sobre os temas, com explicações teóricas, exemplos de código, tabelas comparativas e referências.
  * **`/index.html`**: Uma apresentação de slides interativa e visualmente atraente que resume os principais pontos do artigo. Inclui uma demonstração animada das operações de pilha.

## 🚀 Como Visualizar

Existem duas maneiras de visualizar o material deste projeto:

### 1\. Online (Recomendado via GitHub Pages)

A forma mais fácil de ver a apresentação interativa é através do GitHub Pages.

1.  Certifique-se de que o GitHub Pages está ativado para este repositório (em `Settings` \> `Pages`, selecione a branch `main` como fonte).
2.  Acesse a apresentação no seguinte URL:
    ```
    https://<seu-usuario>.github.io/<nome-do-repositorio>/
    ```

### 2\. Localmente

1.  Clone ou baixe este repositório:
    ```bash
    git clone https://github.com/<seu-usuario>/<nome-do-repositorio>.git
    ```
2.  Navegue até o diretório do projeto:
    ```bash
    cd <nome-do-repositorio>
    ```
3.  Abra o arquivo `index.html` no seu navegador de preferência.
4.  O arquivo `artigo_tecnico.md` pode ser lido em qualquer editor de texto ou diretamente no GitHub.

## 🛠️ Tecnologias Utilizadas

  * **Conteúdo Técnico**: Markdown
  * **Apresentação**:
      * HTML5
      * CSS3 (com Flexbox, Grid e Animações)
      * JavaScript (ES6)

## 🧠 Conceitos Abordados

### Parte 1: Pilhas em Java

  * **Princípio LIFO** (Last-In, First-Out).
  * Operações fundamentais: `push`, `pop`, `peek`, `isEmpty`.
  * Análise crítica da classe legada `java.util.Stack` e sua herança de `Vector`.
  * A abordagem moderna com a interface `Deque` e a implementação `ArrayDeque`.
  * Comparativo de performance, design de API e `thread-safety`.
  * **Aplicações Práticas**:
      * Validação de parênteses balanceados.
      * Conversão de expressões (Infixa para Pós-fixa).
      * Algoritmos de Backtracking (solução de labirintos).

### Parte 2: Árvores de Decisão em Machine Learning

  * **Fundamentos**: Nós, ramos, folhas e a interpretabilidade de modelos "white-box".
  * **Construção da Árvore**:
      * Particionamento Recursivo.
      * Métricas de impureza: **Índice de Gini** e **Entropia**.
      * Ganho de Informação.
  * **Overfitting e Soluções**:
      * O trade-off viés-variância.
      * Técnicas de **Poda (Pruning)**: Pré-poda e Pós-poda.
  * **Vantagens Práticas**:
      * Robustez a valores ausentes.
      * Insensibilidade ao escalonamento de atributos.
  * **Métodos de Ensemble**:
      * **Random Forests**: Redução de variância com "sabedoria das multidões".
      * **Gradient Boosted Trees**: Redução de viés com correção sequencial de erros.
