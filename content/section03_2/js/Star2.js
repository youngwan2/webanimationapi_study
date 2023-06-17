export default class Star {
  constructor(count) {
    this.count = count;

  }

  appendStarElToDom() {
    this.div = document.createElement("div");
    this.div.classList.add("star");
    this.div.innerHTML = this.count || 1;
    document.body.append(this.div);

    return this.div
  }
}
