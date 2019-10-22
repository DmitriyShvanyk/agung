import "./index.css";
import { LoadData } from "./modules/load.js";
import { Modal } from "./modules/modal.js";


// preloader
const loadData = new LoadData();
const preloader = document.querySelector('.preloader');

loadData.load(1000).then(function () {
  preloader.classList.add('preloader--hidden');
}).catch(function () {
  preloader.classList.remove('preloader--hidden');
});


// modal
const headerBtnScroll = document.querySelector('.header__scroll');
const modalElement = document.querySelector('.modal');
const modal = new Modal(modalElement, headerBtnScroll);


// projects
const projects = document.querySelector('.projects');

function showProjects(e) {
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
projects.addEventListener('click', showProjects);