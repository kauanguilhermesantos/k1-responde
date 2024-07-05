// const popUp = document.querySelector('.containerPopUp');

// function abrirPopUp() {
//     popUp.classList.add('ativo');
// }

// function fecharPopUp() {
//     popUp.classList.remove('ativo');
// }

const popUp = document.querySelectorAll('.cardQuestao');
const modal = document.querySelector(".modal");
const botaoOK = document.querySelector(".botaoOK");

// popUp.onclick = function() {
//     modal.showModal();
// }

// botaoOK.onclick = function() {
//     modal.close();
// }
const fecharPopUp = document.querySelector('.containerPopUp');

popUp.forEach(card => {
  card.addEventListener('click', function() {
    modal.showModal();
  });
});

botaoOK.onclick = function() {
    fecharPopUp.classList.add('fechar'); // adicionar class pra animação
    modal.close();
}

modal.addEventListener('click', function(evento) {
    if (evento.target === modal) {
      modal.close();
    }
});



// function fecharPopUp() {
//     if()
//     fecharPopUp.classList.add('fechar');
// }
