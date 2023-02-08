import Game from './Game';
import goblin from '../img/goblin.png';

const selector = document.querySelector('.item');
const size = window.innerWidth;
new Game(selector, 4, 3, size, goblin);
