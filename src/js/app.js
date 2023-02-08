import Game from './Game';
import goblin from '../img/goblin.png';

const selector = document.querySelector('.item');
const sizeWindow = window.innerWidth;

let size;
if (sizeWindow < 1000) {
    size = sizeWindow
} else {
    size = 1000
}

new Game(selector, 4, 3, size, goblin);
