// Import the classifyTriangle function from its module
const classifyTriangle = require('./classifyTriangle');

describe('classifyTriangle: Required input conditions -  See readme for more details', () => {
    test('should classify an Equilateral triangle', () => {
      expect(classifyTriangle(10, 10, 10)).toBe('Equilateral');
      // add more test cases based on your requirements and Boundary Value Analysis + Equivalence Partitioning
    });
  
    test('should return error for invalid inputs', () => {
      expect(classifyTriangle(0, 10, 10)).toBe('Error: Input conditions C1, C2, or C3 failed.');
        // add more test cases based on your requirements and Boundary Value Analysis + Equivalence Partitioning
    });
  
    test('should return "Not a Triangle" for invalid triangle sides', () => {
      expect(classifyTriangle(1, 2, 3)).toBe('Not a Triangle');
      // add more test cases based on your requirements and Boundary Value Analysis + Equivalence Partitioning
    });
  });

// BVT and ECP
describe('classifyTriangle: BVT & ECP', () => {
	
  // BVT: Lower bound test - smallest valid triangle sides
  test('BVT: Lower bound (1, 1, 1) should classify as Equilateral', () => {
    // Expect an Equilateral triangle when all sides are at the lower valid bound (1)
    expect(classifyTriangle(1, 1, 1)).toBe('Equilateral');
  });

  // BVT: Upper bound test - largest valid triangle sides
  test('BVT: Upper bound (200, 200, 200) should classify as Equilateral', () => {
    // Expect an Equilateral triangle when all sides are at the upper valid bound (200)
    expect(classifyTriangle(200, 200, 200)).toBe('Equilateral');
  });

  // BVT: Test just below lower bound; one side is 0, which is invalid
  test('BVT: Just below lower bound (0, 10, 10) should return error', () => {
    // Expect an error when a side is below the minimum allowed value
    expect(classifyTriangle(0, 10, 10)).toBe('Error: Input conditions C1, C2, or C3 failed.');
  });

  // BVT: Test just above upper bound; one side exceeds the maximum allowed value
  test('BVT: Just above upper bound (201, 10, 10) should return error', () => {
    // Expect an error when a side exceeds the maximum allowed value
    expect(classifyTriangle(201, 10, 10)).toBe('Error: Input conditions C1, C2, or C3 failed.');
  });
  
  // BVT: Just within lower bound (slightly above the minimum)
  test('BVT: Just within lower bound (2, 2, 2) should classify as Equilateral', () => {
	// Expect an Equilateral triangle for sides just above the lower boundary
    expect(classifyTriangle(2, 2, 2)).toBe('Equilateral');
  });

  // BVT: Just within upper bound (slightly below the maximum)
  test('BVT: Just within upper bound (199, 199, 199) should classify as Equilateral', () => {
    // Expect an Equilateral triangle for sides just below the upper boundary
    expect(classifyTriangle(199, 199, 199)).toBe('Equilateral');
  });

  // BVT: Edge case for triangle inequality (barely fails) in one order
  test('BVT: Edge case for triangle inequality (3, 4, 7) should be Not a Triangle', () => {
    // Expect 'Not a Triangle' since the sum of the two smaller sides is not greater than the third
    expect(classifyTriangle(3, 4, 7)).toBe('Not a Triangle');
  });

  // BVT: Edge case for triangle inequality (barely fails) in a different order
  test('BVT: Edge case for triangle inequality (7, 3, 4) should be Not a Triangle', () => {
    // Expect 'Not a Triangle' with the sides in another order that still violates the triangle inequality
    expect(classifyTriangle(7, 3, 4)).toBe('Not a Triangle');
  });
  
  // BVT: Mixed boundary values where one side is at the lower bound and another at the upper bound
  test('BVT: Mixed boundary values (1, 200, 100) should be Not a Triangle', () => {
    // Expect 'Not a Triangle' since the sides are too disparate to form a valid triangle
    expect(classifyTriangle(1, 200, 100)).toBe('Not a Triangle');
  });

  test('BVT: Mixed boundary values (100, 1, 200) should be Not a Triangle', () => {
    // Expect 'Not a Triangle' for another permutation of extreme side values
    expect(classifyTriangle(100, 1, 200)).toBe('Not a Triangle');
  });

// ECP

  // ECP: Valid Equilateral triangle with typical values
  test('ECP: Valid Equilateral triangle (5, 5, 5)', () => {
    // Call the function with three equal sides (not at boundary) and expect 'Equilateral'
    expect(classifyTriangle(5, 5, 5)).toBe('Equilateral');
  });

  // ECP: Valid Isosceles triangle (two equal sides)
  test('ECP: Valid Isosceles triangle (5, 5, 3)', () => {
    // Expect an Isosceles triangle when two sides are equal
    expect(classifyTriangle(5, 5, 3)).toBe('Isosceles');
  });

  // ECP: Valid Scalene triangle (all sides different)
  test('ECP: Valid Scalene triangle (3, 4, 5)', () => {
    // Expect a Scalene triangle when all sides are different and valid
    expect(classifyTriangle(3, 4, 5)).toBe('Scalene');
  });

  // ECP: Not a Triangle when triangle inequality is violated
  test('ECP: Not a Triangle (1, 2, 3)', () => {
    // Call the function with sides that do not satisfy the triangle inequality
    expect(classifyTriangle(1, 2, 3)).toBe('Not a Triangle');
  });

  // ECP: Alternative Isosceles triangle configuration (order variation)
  test('ECP: Isosceles triangle (5, 3, 5)', () => {
    // Expect an Isosceles triangle when the order of the sides is different but two sides remain equal
    expect(classifyTriangle(5, 3, 5)).toBe('Isosceles');
  });

  // ECP: Another alternative Isosceles triangle configuration
  test('ECP: Isosceles triangle (3, 5, 5)', () => {
    // Expect an Isosceles triangle with another ordering of sides
    expect(classifyTriangle(3, 5, 5)).toBe('Isosceles');
  });

  // ECP: Various Scalene triangles with different side lengths
  test('ECP: Scalene triangle (5, 7, 9)', () => {
    // Expect a Scalene triangle for these valid but different side lengths
    expect(classifyTriangle(5, 7, 9)).toBe('Scalene');
  });

  test('ECP: Scalene triangle (11, 13, 15)', () => {
    // Expect a Scalene triangle for another set of valid, different side lengths
    expect(classifyTriangle(11, 13, 15)).toBe('Scalene');
  });

  // ECP: Invalid input types - when a side is provided as a letter
  test('ECP: Invalid input type (letter) should return error', () => {
    // Expect an error message when a side is not a number
    expect(classifyTriangle('a', 5, 5)).toBe('Error: Input conditions C1, C2, or C3 failed.');
  });

  // ECP: Invalid input types - when a side is negative
  test('ECP: Invalid input type (negative number) should return error', () => {
    // Expect an error message when a side is negative
    expect(classifyTriangle(-5, 5, 5)).toBe('Error: Input conditions C1, C2, or C3 failed.');
  });

});
