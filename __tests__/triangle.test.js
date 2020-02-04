import { Triangle } from './../src/triangle.js';

describe('Triangle', () => {

  test('should correctly create a triangle object with three lengths', () => {
    var triangle = new Triangle(2,4,5);
    expect(triangle.side1).toEqual(2);
    expect(triangle.side2).toEqual(4);
    expect(triangle.side3).toEqual(5);
  });
  test('should correctly determine whether theree slengths are not a triangle', () => {
      var notTriangle=new Triangle(3,9,22);
      expect(notTriangle.checkType()).toEqual("not a triangle");
  });
  test('should correctly determine whether three lengths make a scalene triangle', function() {
    var scalTriangle = new Triangle(4,5,7)
    expect(scalTriangle.checkType()).toEqual("scalene triangle");
  });
  test('should correctly determine whether three lengths make an isosceles triangle', () => {
    var isocTriangle = new Triangle(5,5,7)
    expect(isocTriangle.checkType()).toEqual("isosceles triangle");
  });
  test('should correctly determine whether three lengths make an equilateral triangle', () => {
      var equilateralTriangle = new Triangle(5,5,5)
      expect(equilateralTriangle.checkType()).toEqual("equilateralTriangle")
  });
  test('should "return not a triangle" if non numbers are inputted into fields', () => {
      var textTriangle = new Triangle("hello",5,5)
      expect(textTriangle.checkType()).toEqual("not a triangle")
  });
  test('should return "not a triangle" if negative numbers are passed into fields',() =>{
      var neagativeTriangel = new Triangle(-5,-25,-5)
      expect(neagativeTriangel.checkType()).toEqual("not a triangle")
  })
});
