
const ul = document.querySelector('main ul');
const carrinhoCompras = document.querySelector('main .carrinhoCompras')
let contador =0


adicionarCarrinho=(event)=>{
    
    let containerProduto = document.createElement("div")
    let imagemProduto = document.createElement("img")
    let nomeProduto = document.createElement("h3")
    let priceProduto = document.createElement("h3")
    let priceTotal = document.querySelector(".carrinhoCompras span")

    imagemProduto.src = event.target.parentElement.children[0].src
    
    nomeProduto = event.target.parentElement.children[1].textContent
    priceProduto = "     R$"+ event.target.parentElement.children[2].textContent
    contador += parseInt(event.target.parentElement.children[2].textContent)
    priceTotal.innerText = `Preco Total: R$${contador},00`
    console.log(contador)

    

    
    containerProduto.append(imagemProduto,nomeProduto,priceProduto)

    carrinhoCompras.appendChild(containerProduto)

    
}

function montarListaProdutos(listaProdutos) {

    let precoTotal =0
    listaProdutos.forEach((elemento)=>{
                precoTotal+= elemento.preco
    })

    

    ul.innerHTML = " "
    listaProdutos.forEach((produto,index) => {
        const li = document.createElement('li');
        const ol = document.createElement("ol")
        const liComponentes = document.createElement("li")
        const img = document.createElement('img');
        const h3 = document.createElement('h3');
        const p = document.createElement('p');
        const span = document.createElement('span');
        const btnAdicionar = document.createElement('button')

        produtos[index].componentes.forEach((elementoComponente,index)=>{

            
          
            liComponentes.append(`${index + 1}.`+elementoComponente, "\n")
           
            ol.append(liComponentes)
            
        })

        // Adicionando dados do produto aos elementos
        img.src = produto.img;
        img.alt = produto.nome;
        h3.innerText = produto.nome;
        p.innerText = produto.preco;
        span.innerText = produto.secao;
        btnAdicionar.innerText = "Adicionar ao carrinho"
        btnAdicionar.addEventListener("click",adicionarCarrinho)

      
        // Adicionando o elementos para o li
       // li.appendChild(img);
       // li.appendChild(h3);
      //  li.appendChild(p);
      //  li.appendChild(span);
        
        li.append(img,h3,p,span,ol,btnAdicionar)

        // Adicionando li ao HTML
        ul.appendChild(li)
       
        
    });
}

function filtrar(pesquisa, tipo) {
  
        
 
    
            const listaHortifruti = produtos.filter((produto) => {
                return produto.pesquisa_secao === pesquisa || produto.pesquisa_nome===pesquisa||produto.categoria===pesquisa;       
            });
            
            montarListaProdutos(listaHortifruti);
        

   
}

let btnFiltroHortifruti = document.querySelector(".estiloGeralBotoes--filtrarHortifruti")
let btnFiltroPanificadora = document.querySelector(".estiloGeralBotoes--filtrarPanificadora")
let btnFiltroLaticinios = document.querySelector(".estiloGeralBotoes--filtrarLaticinios")
let btnFiltroTodos = document.querySelector(".estiloGeralBotoes--mostrarTodos")
let btnPesquisa = document.querySelector(".estiloGeralBotoes--botaoBuscaPorNome")


btnFiltroHortifruti.addEventListener("click",function(){
    filtrar("hortifruti",1)
    
})
btnFiltroPanificadora.addEventListener("click",function(){
    
    filtrar("panificadora",1)
    
})
btnFiltroLaticinios.addEventListener("click",function(){filtrar("laticinios",1)})

btnFiltroTodos.addEventListener("click",function(){
    montarListaProdutos(produtos)
})


btnPesquisa.addEventListener("click",function(){
    filtrar(document.querySelector(".campoBuscaPorNome").value.toLowerCase(),2)
    
    
})

montarListaProdutos(produtos)
