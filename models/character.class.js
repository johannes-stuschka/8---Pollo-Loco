class Character extends MovableObject {
  y = 389;
  frameWidth = 32;
  frameHeight = 32;
  sourceX = 0;
  sourceY = 96;
  currentImage = 0;
  idleFrames = 4;

  constructor() {
    super().loadImage("./imgs/fox/Fox_Idle_with_shadow.png");
    this.idleAnimation();
  }

  idleAnimation() {
    setInterval(() => {
      this.currentImage = this.currentImage % this.idleFrames;
      this.sourceX = this.currentImage * this.frameWidth;
      this.currentImage += 1;
    }, 1000 / 7);
  }
}

// if (this.currentImage < 3) {
//   this.sourceX = this.currentImage * this.frameWidth;
//   this.currentImage += 1;
// } else {
//   this.sourceX = this.currentImage * 32;
//   this.currentImage = 0;
// }
