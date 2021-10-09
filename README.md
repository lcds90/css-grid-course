# CSS Grid Course

[Link do Curso](https://courses.wesbos.com/account)

Este projeto foi feito para testar e melhorar minhas habilidades com CSS Grid.

## 01 - Fundamentos

- Todos nodes filhos de um elemento com display:grid, sempre irão ser items de grid explicitamente
- A declaração direta é chamada de implicit grid
- Utilizando a propriedade `auto` ele se auto ajusta com espaço que lhe fica disponível
- Os números em relação ao grid não significa a coluna em si, mas sim o começo e aonde termina


```html

<section class="container"> <!-- Elemento com grid aplicado -->
    <article></article> <!-- Item do grid -->
    <article></article> <!-- Item do grid -->
    <article></article> <!-- Item do grid -->
</section>

```

```css
 .exemplo {
    display:grid;
    grid-template-columns: 100px auto 100px 100px;
    grid-gap: 20px;
    grid-template-rows:1fr 1fr;
 }
```

## 02 - Implicito X Explicito

- O modo explicito significa quando há declaração EXATAMENTE do que elas precisam ser
- O modo implicito acontece quando o navegador precisa alocar por exemplo: 4 itens com somente duas colunas
- Então a implicidade ocorre no momento da criação da segunda linha
(grid-row) para encaixar os elementos.
- O tamanho da implicidade pode ser manipulada com auto-rows/columns.



```css
 .exemplo {
    display:grid;
    grid-template-columns: 1fr 100px;
    grid-auto-rows: 250px;
 }
```

## 03 - Auto Flow

- O auto flow determina se o elemento novo com o grid explicito definido anteriormente irá se ajuntar com a coluna ou linha do grid.
- Por padrão, ele sempre irá adicionar uma nova linha para ocorrer a implicidade.



```css
 .exemplo {
    display:grid;
    grid-auto-flow: column;
    grid-auto-columns: 1fr;
    grid-template-rows: 1fr;
    /* Será somente uma linha, os novos itens irão surgir como uma nova coluna */
 }
```


## 04 - Definição de tamanhos

- Não utilize a definição do grid com %,
- Porque a porcentagem é relacionado ao algo que tenha como pai algo pré-definido
> container pai como width: 100vw, no node filho pode-se usar 50% (50vw)
- Opte pelas medidas de frações, pois elas realizam o calculo automatico para nós
- A definição do grid-auto-rows por padrão é 1fr ao declarar o display: grid

[Vídeo explicativo sobre o conceito de utilizar fr](https://www.youtube.com/watch?v=Dp7kOWhAjuo)

```css
 .exemplo {
    display:grid;
    grid-template-columns: 2fr auto 200px;
    /*  podemos combinar a utilização, mas não é muito recomendável */
 }
```

## 05 - Repeat

- A função repeat evita repetição desnecessária em relação a quantidade de elementos definidos
- Podemos utilizar da melhor forma que for convecional ao código.



```css
 .exemplo {
    display:grid;
    grid-template-columns: 2fr repeat(3, 1fr auto) 200px;
    grid-template-rows: repeat(2, 1fr);
    /*  
    grid-template-columns: 2fr 1fr auto 1fr auto 1fr auto 200px;
    grid-template-rows: 1fr 1fr;
    */
 }
```
## 06 - Tamanho de itens do grid

- Não podemos definir o width explicito no grid item
- Pois todos os itens são afetados pela explicidade
- Para alterar a quantidade de colunas ocupadas, utilizados a propriedade span
> coluna: grid-column / linha: grid-row

```css
 .exemplo {
   grid-column: span 3;
   grid-row: span 2;
   height:100%;
 }
```
