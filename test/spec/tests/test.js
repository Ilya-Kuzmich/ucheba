let Calculator = require ("../../src/calculator/calculator");

describe ("Test Calculator class", function() {
  let calc = new Calculator();
  
  beforeEach(function() {
    console.log("Start of the  tests ");
  });

  afterEach(function(){
    calc.cleanUp();
  });
  
  it ("Test plus function", function () {
    calc.plus(5);
    expect(calc.result).toBe(5);
  });
  
  it ("Test plus function with /./", function () {
    calc.plus(7.7);
    expect(calc.result).toBe(7.7);
  });
 
  it ("Test plus function with --", function () {
    calc.plus(-5);
    expect(calc.result).toBe(-5);
  });
  
  it ("Test plus function with /./ and --", function () {
    calc.plus(-5)
        .plus(5.5)
    expect(calc.result).toBe(0.5);
  });

  it ("Test plus function with ", function () {
    calc.plus(31.7)
        .plus(28.3)
        .plus(0.1)
    expect(calc.result).toBe(60.1);
  });

  it ("Test minus function", function () {
  calc.minus(10)
  expect(calc.result).toBe(-10);
  });
  it ("Test min function with /./", function () {
  calc.minus(5.5);
  expect(calc.result).toBe(-5.5);
  });

  it ("Test min function with ", function () {
  calc.minus(5.5)
      .minus(5.5)
  expect(calc.result).toBe(-11);
  });

  it ("Test minus function with --", function () {
  calc.minus(-10)
  expect(calc.result).toBe(10);
  });

  it ("Test minus function with String", function () {
  let isErr = false;
  try {
    calc.minus("11");
  } catch (err) {
    isErr = true;
    expect(err.message).toBe("tupe  err");
  } 
    expect(isErr).toBe(true);
  });

  it ("Test dev function ", function () {
  calc.div(10)
  expect(calc.result).toBe(0);
  });

  it ("Test dev function with /./", function () {
  calc.plus(45)
      .div(4.5)
  expect(calc.result).toBe(10);
  });

  it ("Test dev function with --", function () {
  calc.plus(10)
      .div(-5)
  expect(calc.result).toBe(-2);
  });

  it ("Test div functio for 0", function () {
  let isErr = false;
  try {
    calc.div(0);
  } catch (err) {
    isErr = true;
    expect(err.message).toBe("No 0 parameter");
  } 
    expect(isErr).toBe(true);
  });
  it('Test divide function for large value', function () {
  let isErr = false;
  try {
      calc.divide(9999999999999999);
  } catch (err) {
      isErr = true;
      expect(err.message).toBe('large value');
  }
  expect(isErr).toBe(true);
});

it ("Test mult function ", function () {
  calc.mult(11)
  expect(calc.result).toBe(0);
});

it ("Test mult function with --", function () {
  calc.plus(11) 
      .mult(-1)
  expect(calc.result).toBe(-11);
});

it ("Test mult function with /./", function () {
  calc.plus(11)
      .mult(0.1)
  expect(calc.result).toBe(1.1);
});


it ("Test mult function with large numbers", function () {
  calc.plus(22)
      .mult(100000000)
      .mult(2)
  expect(calc.result).toBe(4400000000);
});

  it ("Test mult function with String ", function () {
  let isErr = false;
  try {
    calc.mult("33");
  } catch (err) {
    isErr = true;
    expect(err.message).toBe("type err");
  } 
    expect(isErr).toBe(true);
  });

  it ("Test get Result function: +,-,*,/", function () {
  calc.plus(11)
      .minus(3)
      .mult(8)
      .div(4)
  expect(calc.getResult()).toBe(16);
  });

  it ("Test CleanUp function: +,-,*,/", function () {
    calc.plus(111)
        .minus(22)
        .mul(11)
        .div(222);
    calc.cleanUp();
    expect(calc.result).toBe(0);
  });
})