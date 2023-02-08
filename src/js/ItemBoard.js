export default class ItemBoard {
  constructor(border, findSize, size, selector) {
    this.border = border;
    this.findSize = findSize;
    this.size = size;
    this.selector = selector;
  }

  getItemBoard() {
    const itemBoard = document.createElement('div');
    itemBoard.classList.add('board__item');
    itemBoard.style.width = `${this.size * 0.85 / this.findSize - this.border}px`;
    itemBoard.style.height = `${this.size * 0.85 / this.findSize - this.border}px`;
    itemBoard.style.border = `${this.border}px solid rgb(223, 223, 248)`;
    itemBoard.style.backgroundColor = 'rgb(240, 135, 135)';
    return itemBoard;
  }
}
