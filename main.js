// função que fara com que toque o som de cada tecla.
function tocarSom (seletorAudio) {
    //parametro seletorAudio recebe o ID do button ue foi presicionado;

    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    } else {
        console.log('elemento não encontrado');
    };
    // estrutura condicional que verifica se o ID passado existe e reproduz o som ou envia uma mensagem de erro no console

};

const listaDeTecla = document.querySelectorAll(".tecla");
// querySelectorAll, essa forma de seleção retornara um array de objetos com todos os items HTML selecionados.
// const, uma declaração que recebera dados que não se modifica ao decorer do script.

// condição "while" significa que enquanto a condição que for passada for diferente das condição desejada sera realizada um lanço de repetição.
for (let contador = 0; contador < listaDeTecla.length; contador++) {

    const tecla = listaDeTecla[contador];
    // variavel que guarda qual tecla esta sendo clicada.

    const instrumento = tecla.classList[1];
    // variavel que guarda qual instrumento sera tocado quando for tocada a respectiva tecla.

    // template string, é um tipo de string ao qual se pode por variaveis dentro do escopo da string.
    const idAudio = `#som_${instrumento}`;

    // variavel que guarda qual o ID do som que será tocado.

    tecla.addEventListener('click', () => {
        // addEventListener, adiciona evento de click ao botão selecionado. 
        // é declarada uma arrow function para que não seja executada a função assim que for carregada a página, mas sim quando for clicado no elemento.

        tocarSom(idAudio);  
        
        tecla.onkeydown = (evento) => {
            if (evento.code === 'Enter' || evento.key === 'Space') {
                tecla.classList.add('ativa');
            }; 
            // estrutura condicional que verifica a tecla que foi precionada e adiciona a clase caso seja a tecla "enter" ou "espaço"

            tecla.onkeyup = () => {
                tecla.classList.remove('ativa');
            };
        };
        // função que adiciona o fundo colorido na tecla em que foi clicado.
    }); 
};