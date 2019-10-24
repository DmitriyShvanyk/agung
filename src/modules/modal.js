export default class Modal {
  constructor(modalElement, btnElement) {
    this.modalElement = modalElement;
    this.btnElement = btnElement;

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.btnElement.addEventListener('click', this.openModal);
    this.modalElement.querySelector('.modal__close').addEventListener('click', this.closeModal);
  }

  openModal(e) {
    e.preventDefault();
    this.modalElement.classList.add('modal--open');
  }

  closeModal(e) {
    e.preventDefault();
    this.modalElement.classList.remove('modal--open');
  }

}

