import ItemBoard from './ItemBoard';
import { randomNumbers } from './randomNumbers';
import Goblin from './Goblin';

export default class Board {
  constructor(findSize, border, size, selector, img) {
    this.findSize = findSize;
    this.border = border;
    this.size = size;
    this.selector = selector;
    this.boardItems = [];
    this.img = img;
  }

  getBoard() {
    const board = document.createElement('div');
    board.classList.add('board');
    return board;
  }

  getFullBoard() {
    return this.selector.querySelector('.board');
  }

  addItemBoard() {
    const board = this.getBoard();
    for (let item = 0; item < this.findSize ** 2; item++) {
      let itemBoard = new ItemBoard(this.border, this.findSize, this.size, this.selector);
      itemBoard = itemBoard.getItemBoard();
      this.getFullBoard().appendChild(itemBoard);
      this.boardItems.push(itemBoard);
    }
  }

  addBoardStyle() {
    const widthPage = window.innerWidth;
    this.getFullBoard().style.width = `${this.size * 0.85 - this.border * 2}px`;
    this.getFullBoard().style.height = `${this.size * 0.85 - this.border * 2}px`;
    this.getFullBoard().style.border = `${this.border}px solid opasiti`;
  }

  addGoblin() {
    let goblin = new Goblin(this.img);
    goblin = goblin.getGoblin();
    const random = randomNumbers(0, this.boardItems.length);
    this.boardItems[random].appendChild(goblin);
  }

  move() {
    setInterval(() => {
      this.selector.querySelector(".goblin").remove()
      this.addGoblin()
    }, 1000)
  }
}
