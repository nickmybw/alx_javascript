class Rectangle {
  constructor(w, h) {
    if (w <= 0 || h <= 0 || typeof w !== "number" || typeof h !== "number") {
      // If w or h is invalid, create an empty object
      this.width = undefined;
      this.height = undefined;
    } else {
      // Otherwise, initialize width and height
      this.width = w;
      this.height = h;
    }
  }

  print() {
    if (this.width && this.height) {
      for (let i = 0; i < this.height; i++) {
        console.log("X".repeat(this.width));
      }
    }
  }
}

module.exports = Rectangle;
