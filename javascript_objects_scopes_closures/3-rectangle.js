class Rectangle {
  constructor(w, h) {
    if (w <= 0 || h <= 0) {
      // create an empty object
      return {};
    }
    this.width = w;
    this.height = h;
  }

  print() {
    for (let i = 0; i < this.height; i++) {
      console.log("X".repeat(this.width));
    }
  }
}
