class cylindricalVolumeCalculator {
  constructor(height, radius) {
    this.height = height;
    this.radius = radius;
  }
  volume() {
    return Math.PI * (this.radius**2) * this.height
  }
}