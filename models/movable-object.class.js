class MovableObject {
  x = 160;
  img;
  height = 64;
  width = 64;
  otherDirection = false;
  sourceX = 0;
  sourceY = 0;

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  idleAnimation() {
    setInterval(() => {
      this.currentImage = this.currentImage % this.idleFrames;
      this.sourceX = this.currentImage * this.frameWidth;
      this.currentImage += 1;
    }, 1000 / 10);
  }

  moveLeft(params) {
    pass;
  }
  moveRight(params) {
    pass;
  }
}
