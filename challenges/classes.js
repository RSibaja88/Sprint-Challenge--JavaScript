// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker1 {
    constructor(att) {
        this.length = att.length;
        this.width = att.width;
        this.height = att.height;
    }
    volume() {
        const volume = this.length * this.width * this.height
        return volume;
    }
    surfaceArea() {
        const surfaceArea = 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
        return surfaceArea;
    }
}

const Cubey1 = new CuboidMaker1({
    length: 4,
    width: 5,
    height: 5,
})




// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(Cubey1.volume()); // 100
console.log(Cubey1.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.