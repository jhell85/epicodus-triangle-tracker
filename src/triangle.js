export function Triangle(side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }
Triangle.prototype.checkType = function() {
    if ( Number.isInteger(this.side1) === false || Number.isInteger(this.side2) === false || Number.isInteger(this.side3) === false){
        console.log("not a number")
        return "not a triangle";
    } else if ((this.side1 > (this.side2 + this.side3)) || (this.side2 > (this.side1 + this.side3)) || (this.side3 > (this.side1 + this.side2))) {
        console.log("not a triangle due to length")
        return "not a triangle";
    } else if ((this.side1 !== this.side2) && ((this.side1 !== this.side3)) && ((this.side2 !== this.side3))) {
        return "scalene triangle";
    }  else if (((this.side1 === this.side2) && (this.side1 !== this.side3)) || ((this.side1 === this.side3) && (this.side1 !== this.side2)) || ((this.side2 === this.side3) && (this.side2 !== this.side1))) {
        return "isosceles triangle";
    } else if (this.side2 === this.side3 && this.side3 === this.side1){
        return "equilateralTriangle";
    }
};