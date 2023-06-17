export default class Star {
  constructor(count, x, y, z) {
    this.count = count;
    this.x = x;
    this.y = y;
    this.z = z;
  }

  appendStarElToDom() {
    const div = document.createElement("div");
    div.classList.add("star");
    div.style.cssText = `
            left : ${this.x}px;
            top : ${this.y}px;
            transform:scale(${this.z});
        `;
    div.innerHTML = this.count || 1;

    return document.body.append(div);
  }
}
