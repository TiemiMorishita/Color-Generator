function cor() {

    const cores1 = '0123456789'
    const cores2 = 'ABCDEF'

    const cores  = cores1.concat(cores2); //concat

    let texto = '#'

    for(let i = 0; i < 6; i++){ 
        texto += cores.charAt(Math.floor(Math.random() * cores.length)) //length e for
    }

    return texto;

}

function funcao1(){

    let container = document.getElementById(`cor`)
    container.style.backgroundColor = cor()
        
    let texto_cores = document.getElementById(`texto_cores`)
    texto_cores.textContent = `${cor()}`
   
}

function funcao2(){
    let borda = document.getElementById(`cor`)
    borda.style.border = '#7e63a3 solid 3px';
}

function funcao3(){
    let borda = document.getElementById(`cor`)
    borda.style.border = 'none';
}