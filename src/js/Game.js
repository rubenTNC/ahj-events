import Board from './Board';

export default class Game {
  constructor(selector, findSise, border, size, img) {
    this.selector = selector;
    this.img = img;
    this.findSise = findSise;
    this.count = 0;
    this.border = border;
    this.size = size;
    this.start();
    this.onClick = this.onClick.bind(this)
    this.selector.addEventListener("click", this.onClick)
  }

  addGame() {
    const game = document.createElement('div');
    game.classList.add('game');
    this.selector.append(game);
    const title = document.createElement('h3');
    title.classList.add('game__title');
    title.textContent = 'Бахни по гоблину';
    game.append(title);
  }

  renderCount() {
    const gameCount = document.createElement('span');
    gameCount.classList.add('game__count');
    gameCount.textContent = `Ваш счет: ${this.count}`;
    const board = this.selector.querySelector('.board');
    board.insertAdjacentElement('beforeBegin', gameCount);
  }

  removeCount() {
    const child = this.selector.querySelector('.game__count');
    child.remove();
  }

  getGame() {
    return this.selector.querySelector('.game');
  }

  getBoard() {
    return new Board(this.findSise, this.border, this.size, this.selector, this.img);
  }

  addBoard() {
    const board = this.getBoard();
    this.getGame().append(board.getBoard());
    board.addBoardStyle();
    board.addItemBoard();
    board.move();
  }

  onClick(event) {
    if (event.target == this.selector.querySelector("img")) {
      this.count += 1;
      this.removeCount();
      this.renderCount();
    }
  }

  start() {
    this.addGame();
    this.addBoard();
    this.renderCount();
  }
}
