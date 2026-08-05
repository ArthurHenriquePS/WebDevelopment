// NÃO É USADO


function App(){
    return React.createElement("h1", null, "Hello World sem Build")
}

ReactDOM.render(
    React.createElement(App),
    document.getElementById("root")
)

// npx create-next-app@latest [nome]: Cria o ambiente do React