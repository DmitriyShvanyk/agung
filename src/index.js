import "./index.css";
import { LoadData } from "./modules/load.js";


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
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close');

function openModal() {
  modal.classList.add('modal--open');
}

function closeModal() {
  modal.classList.remove('modal--open');
}

headerBtnScroll.addEventListener('click', openModal);
modalClose.addEventListener('click', closeModal);



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