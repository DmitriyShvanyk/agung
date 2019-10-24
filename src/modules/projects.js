export default class Projects {
  constructor(container) {
    this.container = container;
    this.showProject = this.showProject.bind(this);
    this.container.addEventListener('click', this.showProject);
  }

  showProject(e) {

    const target = e.target;

    if (target.classList.contains('project__btn')) {
      target.classList.toggle('project__btn--active');
      if (target.classList.contains('project__btn--active')) {
        target.textContent = 'Закрыть';
      }
      else {
        target.textContent = 'Смотреть';
      }
      target.closest('.project').classList.toggle('project--active');
    }

  }

}

