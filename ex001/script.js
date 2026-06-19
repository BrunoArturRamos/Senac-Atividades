/* window.alert('Ola Mundo') */
console.log('Olamundi')
let algo = window.prompt(`Digita algo`)
let paragrafo = document.getElementById('texto')
console.log(paragrafo)
paragrafo.ineerHTML = `<p>Olamundi, receba o ${algo} como novo suario</p>`
paragrafo.style.color = `red`