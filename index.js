
function escolhaPedra(){
    getGanhador(1);
}
function escolhaPapel(){
    getGanhador(2);
}
function escolhaTesoura(){
    getGanhador(3);
}

function getGanhador(escolhaJogador){
    let escolhaPC = Math.floor(Math.random() * 3) + 1;
    console.log(escolhaPC);
    let element = document.querySelector(`#e${escolhaPC}`);
    element.classList.add('escolha-pc');
    setInterval(() =>  element.classList.remove('escolha-pc'), 1500);
    const mensagem  = document.querySelector('#ganhador');
    
    if(escolhaJogador == escolhaPC){
        mensagem.textContent = 'Empate';
       
    }
    else if(escolhaJogador == 1 && escolhaPC == 3){
        let contJog = document.querySelector('#cont-jog');
        contJog.textContent++;
        mensagem.textContent = 'Jogador';
    }
    else if(escolhaPC == 1 && escolhaJogador == 3){
        let contPC = document.querySelector('#cont-comp');
        contPC.textContent++;
        mensagem.textContent = 'Computador';
    }
    else if(escolhaJogador < escolhaPC ){
        let contPC = document.querySelector('#cont-comp');
        contPC.textContent++;
        mensagem.textContent = 'Computador';
    }
    else if(escolhaJogador > escolhaPC){
        let contJog = document.querySelector('#cont-jog');
        contJog.textContent++;
        mensagem.textContent = 'Jogador';
    }
    setInterval(()  =>  {mensagem.textContent = ""}, 2000);
}