import Board from './Board';

export default class Game {
  constructor(selector, findSise, border, size, img) {
    this.selector = selector;
    this.img = img;
    this.findSise = findSise;
    this.count = 0;
    this.pass = 0;
    this.border = border;
    this.size = size;
    this.board = new Board(this.findSise, this.border, this.size, this.selector, this.img);
    this.start();
    this.onClick = this.onClick.bind(this)
    this.selector.addEventListener("click", this.onClick)
    setInterval(() => {
      this.pass++
      this.upDateCount()
      this.check()
    }, 1000)
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
    gameCount.textContent = `Ваш счет: ${this.count}  Пропуски ${this.pass}`;
    const board = this.selector.querySelector('.board');
    board.insertAdjacentElement('beforeBegin', gameCount);
  }

  removeCount() {
    const child = this.selector.querySelector('.game__count');
    child.remove();
  }

  upDateCount() {
    const child = this.selector.querySelector('.game__count');
    child.remove();
    const gameCount = document.createElement('span');
    gameCount.classList.add('game__count');
    gameCount.textContent = `Ваш счет: ${this.count}  Пропуски ${this.pass}`;
    const board = this.selector.querySelector('.board');
    board.insertAdjacentElement('beforeBegin', gameCount);
  }

  getGame() {
    return this.selector.querySelector('.game');
  }

  addBoard() {
    this.getGame().append(this.board.getBoard());
    this.board.addBoardStyle();
    this.board.addItemBoard();
    this.board.addGoblin()
    this.board.move()


  }
  check() {
    if (this.pass === 5) {
      alert("Вы проиграли")
      this.pass = 0;
      this.count = 0;
    }
    if (this.count === 5) {
      alert("Вы победили")
      this.pass = 0;
      this.count = 0;
    }
  }

  onClick(event) {
    if (event.target == this.selector.querySelector("img")) {
      this.selector.querySelector("img").remove()
      this.board.addGoblin()
      this.count += 1;
      this.upDateCount()
      this.pass --;
    }
  }

  start() {
    this.addGame();
    this.addBoard();
    this.renderCount();
  }
}
