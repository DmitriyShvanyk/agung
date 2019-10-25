import "./index.css";
import LoadData from "./modules/load.js";
import Modal from "./modules/modal.js";
import ScrollTo from "./modules/scrollto.js";
import Projects from "./modules/projects.js";


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


// scroll to block
const headerBtnScroll = document.querySelector('.header__scroll');
const projectFirst = document.querySelector('#project-1');
const scrollTo = new ScrollTo(headerBtnScroll, projectFirst);


// projects
const projectsContainer = document.querySelector('.projects');
const project = new Projects(projectsContainer);



// transform header topbar
let headerTop = document.querySelector('.header__top');

function transformHeaderTop(){ 

  let scrollY = window.scrollY || window.pageYOffset;
  console.log(scrollY);

  if(scrollY > 0){
    headerTop.classList.add('header__top--transform');
  }
  else{
    headerTop.classList.remove('header__top--transform');
  }

}

window.addEventListener('scroll', transformHeaderTop);