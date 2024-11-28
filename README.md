# **Laboratório 2 – Introdução ao TypeScript**

## **Exercícios**
Utilize o ambiente `Node.js` para executar no console o código `TypeScript` destes exercícios. Você pode utilizar como base o projeto configurado no Laboratório 1.

---

1. Escreva um trecho de código para imprimir os números pares definidos por um intervalo de valores inteiros não-negativos inicio e fim. Utilize versões com for e while.

---

2. Qual o resultado do seguinte bloco de comandos? Qual a explicação para o resultado?
```typescript
let i: number = 0;
while (i != 10) {
  i += 0.2;
}
```

---

3. Escreva uma função `min(x,y)` que devolve o menor entre dois números. Não use funções auxiliares de `Math`. Utilize corretamente a declaração de tipos nos parâmetros e no resultado da função.

---

4. Escreva uma função `pow(x,y)` que calcula o valor de `x^y`, ou seja, `x` elevado a potência `y`. Assuma que os valores de `x` e `y` são números inteiros não negativos e que `x^0=1` para qualquer valor de `x`. Apresente uma versão iterativa e uma versão recursiva para a função. Não utilize o operador `**`. Utilize corretamente a declaração de tipos nos parâmetros e no resultado da função.

---

5. Escreva uma função `toMaiusculaPrimeira(s)` que recebe uma `string s` (assuma qualquer string não vazia) e retorna a mesma string com a primeira letra em maiúscula. Utilize corretamente a declaração de tipos nos parâmetros e no resultado da função.

---

6. Escreva uma função `getMax(arr)` que recebe um array de número inteiros e retorna o maior elemento encontrado no array. Assuma que o array não está vazio. Não utilize funções auxiliares de outros objetos disponibilizados pelo JavaScript. Utilize corretamente a declaração de tipos nos parâmetros e no resultado da função.

---

7. Escreva uma função que, utilizando objetos `Map`, calcule a frequência de cada número presente em um determinado array contendo números inteiros. Utilize corretamente a declaração de tipos nos parâmetros e no resultado da função.

---

## **Recursos Adicionais**

- [Documentação oficial do TypeScript](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)
- [ts-node](https://typestrong.org/ts-node/)
- [nodemon](https://nodemon.io/)
