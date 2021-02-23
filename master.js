const modalBtn = document.querySelectorAll('[data-modal]');
const modalClose = document.querySelectorAll('.modal_close');
const modal = document.querySelectorAll('.modal');


modalBtn.forEach(item => {
  item.addEventListener('click', event => {
    console.log('clicked');
    let $this = event.currentTarget;
    let modalid = $this.getAttribute('data-modal');
    let modal = document.getElementById(modalid);
    let modalContent = modal.querySelector('.modal_content');

    modalContent.addEventListener('click', event => {
      event.stopPropagation();
    });

    modal.classList.add('show');

    modalContent.style.transform = 'none';
  });
});

modalClose.forEach(item => {
  item.addEventListener('click', event => {
    let currentModal = event.target.closest('.modal');

    currentModal.classList.remove('show');

  });
});
modal.forEach(item => {
  item.addEventListener('click', event => {
    let currentModal = event.currentTarget;

    setTimeout(function() {
    currentModal.classList.remove('show');
}, 1);
  });
});

function closeModal(currentModal) {
  currentModal.classList.remove('show');
}

/*--------------------------------------*/

const burger = document.getElementById('sidebarToggle');
const sidebar = document.getElementById('sidebar');

burger.addEventListener('click', event => {
  document.body.classList.toggle('show-sidebar');

});

/*--------------------------------------*/
