function cadastro() {
    Event.preventDefaut()
    let nome = document.getElementById('nome').value; /* busca um evento no html, no caso o pNome do Primeiro nome e guarda no pNome */
    let resultado = document.getElementById('resultado');
    Window.alert(`${nome} seu cad foi bom`);
    resultado.innerHTML= `<p>Sr . ${nome}, seu cadastro foi bom </p>`

}