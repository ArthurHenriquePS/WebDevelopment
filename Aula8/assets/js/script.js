// API = Application Programming Interface é um conjunto de regras que permite que diferentes sistemas se comuniquem entre si
// Client error: 400 - 499  Server error: 500 - 599
// TIPOS DE REQUEZIÇÃO
// GET /products – Lista todos os produtos
// GET /products/:id – Detalha um produto
// POST /products – Cria um novo produto
// PUT /products/:id – Atualiza um produto existente
// DELETE /products/:id – Exclui um produto

// async = inicia assincronizada com a página (executa primeiro)
// await = espera a página iniciar (executa depois)

const listarProdutos = async () => {
    const response = await fetch("https://6a03ade02afe8349b4b56b02.mockapi.io/products")

    const produtos = await response.json()

    const ul = document.getElementById('lista-produtos')

    ul.innerHTML = "";

    produtos.forEach(p => {
        const li = document.createElement('li')
        li.innerHTML = `<p>${p.id}</p>
                        <img src="${p.image}" width="50">
                        <strong>${p.nome}</strong> - R$${p.price} <em>(${p.seller})</em>`;
        ul.appendChild(li);
    });
}

listarProdutos()