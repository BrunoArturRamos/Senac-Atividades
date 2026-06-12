function cadastro() {
    let nome = document.getElementById('nome').value; /* busca um evento no html, no caso o pNome do Primeiro nome e guarda no pNome */
    let resultado = document.getElementById('resultado');
    window.alert(`${nome} seu cad foi bom`);
    resultado.innerHTML= `<p>Sr . ${nome}, seu cadastro foi bom </p>`
    return false
}