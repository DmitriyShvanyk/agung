import "./index.css";
import { LoadData } from "./modules/load.js";
import { Modal } from "./modules/modal.js";


// preloader
const loadData = new LoadData();
const preloader = document.querySelector('.preloader');
const preloaderHidden = 'preloader--hidden';

loadData.load(1000).then(function () {
  preloader.classList.add(preloaderHidden);
}).catch(function () {
  preloader.classList.remove(preloaderHidden);
});


// modal
const headerLinkInfo = document.querySelector('.header__info');
const modalElement = document.querySelector('.modal');
const modal = new Modal(modalElement, headerLinkInfo);


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



// scroll to block
const headerBtnScroll = document.querySelector('.header__scroll');
const projectFirst = document.querySelector('#project-1');

function scrollTo(element) {
  window.scroll({
    behavior: 'smooth',
    left: 0,
    top: element.getBoundingClientRect().top + window.scrollY
  });
}

headerBtnScroll.addEventListener('click', () => {
  scrollTo(projectFirst);
});