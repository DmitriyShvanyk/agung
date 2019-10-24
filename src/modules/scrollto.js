export default class ScrollTo {
  constructor(scrollElement, scrollToElement) {
    this.scrollElement = scrollElement;
    this.scrollToElement = scrollToElement;

    this.scroll = this.scroll.bind(this);
    this.scrollElement.addEventListener('click', this.scroll);
  }

  scroll() {
    window.scroll({
      behavior: 'smooth',
      left: 0,
      top: this.scrollToElement.getBoundingClientRect().top + window.scrollY
    });
  }
}