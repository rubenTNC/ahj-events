export default class Goblin {
  constructor(img) {
    this.img = img;
  }

  getGoblin() {
    const goblin = document.createElement('img');
    goblin.classList.add("goblin")
    goblin.setAttribute('src', this.img);
    return goblin;
  }
}
