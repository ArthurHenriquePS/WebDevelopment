document.getElementById("btn-buscar").onclick = async () => {
    const username = document.getElementById("input-usuario").value.trim()
    const info = document.getElementById("info-usuario")
    debugger
    
    if(!username){
        info.innerHTML = '<span class="text-danger">Digite um usuário</span>'
        return
    }

    info.innerHTML = "Carregando..."

    const response = await fetch(`https://api.github.com/users/${username}`)

    if (!response.ok) throw new Error ("Usuário não encontrado")

    const data = await response.json()

    info.innerHTML = `
        <p><strong>Nome:</strong> ${data.name || "(sem nome)"}</p>
        img src="${data.avatar_url}" width="100px"/>
        <p><strong>Repositórios públicos: </strong> ${data.public_repos}</p>
    `
}